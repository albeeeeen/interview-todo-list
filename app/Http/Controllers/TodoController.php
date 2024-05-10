<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = Todo::query()->get();

        return inertia('Todos/Index', [
            'todos' => $todos,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // BRIEF: Validate the request and save a new TODO, then redirect back to the index
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        Todo::create($validatedData);

        return Redirect::route('todos.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo)
    {
        // BRIEF: Validate the request and update the TODO's "completed" status, then redirect back to the index

        $request->validate([
            'id' => 'required|integer',
        ]);

        $item = $todo->findOrFail($request->input('id'));

        $item->update(['completed' => !$item->completed]);
        
        return Redirect::back()->with('success', 'Todo item updated successfully');;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        // BRIEF: Delete the TODO, then redirect back to the index
    }
}
