<?php

use App\Http\Controllers\ForumController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CommunityController;
use App\Http\Controllers\CommunityPostController;
use App\Http\Controllers\FrontendPostController;
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

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/results', function () {
        return Inertia::render('ApiPage');
    })->name('results');

    Route::get('/stats', function () {
        return Inertia::render('Stats');
    })->name('stats');

    Route::get('/details', function () {
        return Inertia::render('MatchDetails');
    })->name('details');

    Route::resource('dashboard/forums', ForumController::class);
    Route::resource('dashboard/forums.posts', CommunityPostController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
