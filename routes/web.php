<?php

use App\Http\Controllers\ForumController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CommunityController;
use App\Http\Controllers\CommunityPostController;
use App\Http\Controllers\FrontendPostController;
use App\Http\Controllers\MatchController;
use App\Http\Controllers\PostCommentController;
use App\Http\Controllers\VotingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//Route::get('forum/{slug}', [CommunityController::class, 'show'])->name('community.show');
//Route::get('forum/{forum_slug}/posts/{post:slug}', [FrontendPostController::class, 'show'])->name('posts.show');

Route::group(['middleware' => ['auth', 'verified',]], function () {
    Route::get('forum/{slug}', [CommunityController::class, 'show'])->name('community.show');

    Route::get('forum/{forum_slug}/posts/{post:slug}', [FrontendPostController::class, 'show'])->name('posts.show');

    Route::post('forum/{forum_slug}/posts/{post:slug}/comments', [PostCommentController::class, 'store'])->name('posts.comments');

    Route::post('forum/{forum_slug}/posts/{post:slug}/comments/{comment_id}/reply', [PostCommentController::class, 'reply'])->name('posts.comments.reply');

    Route::get('details/{id}', [MatchController::class, 'show'])->name('details.show');

    Route::get('/results', function () {
        return Inertia::render('ApiPage');
    })->name('results');

    Route::get('/live', function () {
        return Inertia::render('Live');
    })->name('live');

    Route::post('/posts/{post:slug}/upvote', [VotingController::class, 'upvote'])->name('posts.upvote');
    Route::post('/posts/{post:slug}/downvote', [VotingController::class, 'downvote'])->name('posts.downvote');

    Route::resource('/forums', ForumController::class);
    Route::resource('/forums.posts', CommunityPostController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
