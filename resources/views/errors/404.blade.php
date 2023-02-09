<!doctype html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-black">
    <div class="flex h-screen">
        <div class="m-auto text-center items-center bg-white rounded-lg p-6">
            <img src="{{ url('storage/notfound.gif')}}" class="rounded-lg" />
            <h1 class="mt-4 text-2xl">A keresett oldal nem található.</h1>
            <p class="mt-4">Hogy én, a fejlesztő, vagy te hibáztál, az remek kérdés.<br> Mindenesetre valószínűleg nem ezt az oldalt keresed.</p>
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4" onclick="window.location='{{ url('/')}}'">
                Vissza a kezdőlapra
            </button>
        </div>
    </div>
</body>
</html>