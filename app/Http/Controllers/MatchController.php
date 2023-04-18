<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Exception\RequestException;
use Inertia\Inertia;

class MatchController extends Controller
{
    public function show($id)
    {
        try {
            $response = Http::get("https://www.balldontlie.io/api/v1/stats?game_ids[]={$id}&per_page=50");

            $matchStatistics = $response->json();
        } catch (RequestException $e) {
            return back()->withErrors(['error' => 'Hiba történt a keresés során!']);
        }

        return Inertia::render('MatchDetails/Show', compact('matchStatistics'));
    }
}