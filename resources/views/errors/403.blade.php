<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    </head>
    <body class="bg-black">
        <div class="flex h-screen">
            <div class="m-auto text-center items-center bg-white rounded-lg p-6">
                <div>
                    <img src="{{ url('storage/forbidden.gif')}}" class="rounded-lg mx-auto" />
                </div>
                <h1 class="mt-4 text-2xl">Az oldalhoz nincs hozzáférésed.</h1>
                <p class="mt-4">Feltehetőleg egy olyan elérésre kattintottál, ahol valaki más által készített fórumot vagy posztot módosítanál vagy törölnél.</p>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4" onclick="window.location='{{ route('forums.index')}}'">
                    Vissza a kezdőlapra
                </button>
            </div>
        </div>
    </body>
</html>