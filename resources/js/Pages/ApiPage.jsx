import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Pagination from '@/Components/Pagination';

export default function API(props) {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const searchButton = document.querySelector('.SearchButton');
        const searchInput = document.querySelector('#search-input');

        searchButton.addEventListener('click', () => {
            const searchValue = searchInput.value;
            console.log(searchValue);

            fetch(`https://www.balldontlie.io/api/v1/games?dates[]=${searchValue}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setGames(data.data);
                })
                .catch(err => {
                    toast('Hiba történt a keresés során!', { type: 'error' })
                    console.error(err);
                })
            console.log('working');
        });
    }, []);

    return (
        <>
            <Head title="API" />
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={<>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Eredménykereső</h2>
                <p className="mt-2 text-gray-500">Az eredménykereső segítségével tehetsz egy utazást a múltba, egészen az 1979-es szezonig bezárólag.</p>
                </>}
            >
                <div className="py-12 flex items-center justify-center">
                    <div className="form-group mx-auto">
                        <div className="form-outline mb-3">
                            <input id="search-input" type="date" className="form-control" placeholder="Keresés"/>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="SearchButton font-medium bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Keresés</button>
                        </div>
                    </div>
                </div>
                <div className="py-6">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Dátum
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
                                    {games.map(({ id, date, home_team, visitor_team, home_team_score, visitor_team_score }) => (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={id}>
                                                <th scope="row" className="px-6 py-4">{ new Date(date).toLocaleDateString() }</th>
                                                <td className="px-6 py-4">{ home_team.full_name }</td>
                                                <td className="px-6 py-4">{ home_team_score } - { visitor_team_score }</td>
                                                <td className="px-6 py-4">{ visitor_team.full_name }</td>
                                                <td><Link href={route('details.show', id)} className="font-medium bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Részletek</Link></td>
                                            </tr>
                                        ))}
    
                                        {games.length === 0 && (
                                            <tr>
                                                <td
                                                    className="px-6 py-4 border-t"
                                                    colSpan="4"
                                                >
                                                    A keresett napon nem találtunk mérkőzést. 
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
