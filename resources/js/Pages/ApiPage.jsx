import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Pagination from '@/Components/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function API(props) {
    const isLoggedIn = Boolean(props.auth.user == null);
    const [games, setGames] = useState([]);

    console.log(isLoggedIn);

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

            {isLoggedIn ? (
                <GuestLayout>
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">Please log in to view this page.</div>
                            </div>
                        </div>
                    </div>
                </GuestLayout>
            ) : (
                <AuthenticatedLayout
                    auth={props.auth}
                    errors={props.errors}
                    header={<>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">API</h2>
                    <p className="mt-2">Words</p>
                    </>}
                >
                    <div className="py-12 flex items-center justify-center">
                        <div className="form-group mx-auto">
                            <div className="form-outline mb-3">
                                <input id="search-input" type="date" className="form-control" placeholder="Keresés"/>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="SearchButton font-medium bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Keresés</button>
                                <ToastContainer/>
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
                                                Date
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Home Team
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Score
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Visitor Team
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Részletes statisztika
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
                                                    <td><Link href={`https://www.basketball-reference.com/boxscores/${new Date(date).toISOString().split('T')[0].replace(/-/g, '')}0${home_team.abbreviation}.html`} className="font-medium bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Részletes statisztika</Link></td>
                                                </tr>
                                            ))}
        
                                            {games.length === 0 && (
                                                <tr>
                                                    <td
                                                        className="px-6 py-4 border-t"
                                                        colSpan="4"
                                                    >
                                                        No games found or the date you've been searching for had no games.
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
            )}
        </>
    );
}
