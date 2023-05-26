import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Pagination from '@/Components/Pagination';

export default function Live(props){
    const [games, setGames] = useState([]);

    const url = 'https://api-nba-v1.p.rapidapi.com/games?live=all';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_API_KEY,
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setGames(data.response);
            })
            .catch(error => {
                console.log(error);
            });
        console.log('working');
    }, []);

    console.log(games);

    return (
        <>
            <Head title="ÉLŐ" />
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={<>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight dark:text-gray-200">Élő eredmények</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-300">Amennyiben van aktuális mérkőzés, azoknak az eredményét itt találod.</p>
                </>}
            >
                <div className="py-6">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Negyed
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Hátralévő idő
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Hazai csapat
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Eredmény
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Vendég csapat
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {games.map(({ id, teams, periods, scores, status }) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={id}>
                                            <td className="px-6 py-4">{ periods.current }</td>
                                            <td className="px-6 py-4">
                                            { status.halftime === true ? (
                                                'Félidő'
                                            ) : (
                                                status.clock
                                            )}
                                            </td>
                                            <td className="px-6 py-4">{ teams.home.name }</td>
                                            <td className="px-6 py-4">{ scores.home.points } - { scores.visitors.points }</td>
                                            <td className="px-6 py-4">{ teams.visitors.name }</td>
                                        </tr>
                                    ))}
                                        {games.length === 0 && (
                                            <tr>
                                                <td
                                                    className="px-6 py-4 border-t"
                                                    colSpan="4"
                                                >
                                                    Jelenleg nincs folyamatban mérkőzés. 
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                                <Pagination links={games.links} />
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}