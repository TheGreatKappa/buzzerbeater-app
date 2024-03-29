<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForumStoreRequest;
use App\Models\Forum;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ForumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $forums = Forum::where('user_id', auth()->id())->paginate(5);

        return Inertia::render('Forums/Index', compact('forums'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Forums/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ForumStoreRequest $request)
    {
        Forum::create($request->validated() + ['user_id' => auth()->id()]);
        
        return to_route('forums.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Forum $forum)
    {   
        $this->authorize('update', $forum);

        return Inertia::render('Forums/Edit', compact('forum'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ForumStoreRequest $request, Forum $forum)
    {   
        $this->authorize('update', $forum);

        $forum->update($request->validated());

        return to_route('forums.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Forum $forum)
    {
        $this->authorize('delete', $forum);

        $forum->delete();

        return to_route('forums.index');
    }
}
