<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Feedback</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-6">
    <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div class="md:flex">
            <div class="w-full p-4 px-5 py-5">
                <div class="text-gray-800 text-xl font-semibold">Visszajelzés</div>
                <div class="w-full mt-5">
                    <div class="flex items-center justify-between">
                        <div class="text-sm text-gray-600 font-semibold">Név:</div>
                        <div class="text-sm text-gray-600">{{ $name }}</div>
                    </div>
                    <div class="flex items-center justify-between mt-2">
                        <div class="text-sm text-gray-600 font-semibold">E-mail:</div>
                        <div class="text-sm text-gray-600">{{ $email }}</div>
                    </div>
                    <div class="flex items-center justify-between mt-2">
                        <div class="text-sm text-gray-600 font-semibold">Leírás:</div>
                        <div class="text-sm text-gray-600">{{ $description }}</div>
                    </div>
                    <div class="flex items-center justify-between mt-2">
                        <div class="text-sm text-gray-600 font-semibold">Visszajelzésnél választott opció:</div>
                        <div class="text-sm text-gray-600">{{ $option }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
