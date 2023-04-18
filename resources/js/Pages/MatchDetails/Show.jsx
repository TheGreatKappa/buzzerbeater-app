import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState, useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';

export default function Show(props) {
    const { matchStatistics } = usePage().props;
    const [stats, setStats] = useState([]);

    useEffect(() => {
        setStats(matchStatistics.data);
    }, [matchStatistics]);

    const playersByTeam = stats.reduce((acc, { team, player, fga, fgm, fg3a, fg3m, fta, ftm, pts, min, reb, ast }) => {
        if (!acc[team.id]) {
          acc[team.id] = {
            name: team.full_name,
            players: [],
            total: {
                fga: 0,
                fgm: 0,
                fg3a: 0,
                fg3m: 0,
                fta: 0,
                ftm: 0,
                pts: 0,
                min: 0,
                reb: 0,
                ast: 0,
            },
          }
        }
      
        acc[team.id].players.push({...player, fga, fgm, fg3a, fg3m, fta, ftm, pts, min, reb, ast })

        acc[team.id].total.fga += fga;
        acc[team.id].total.fgm += fgm;
        acc[team.id].total.fg3a += fg3a;
        acc[team.id].total.fg3m += fg3m;
        acc[team.id].total.fta += fta;
        acc[team.id].total.ftm += ftm;
        acc[team.id].total.pts += pts;
        acc[team.id].total.min += min;
        acc[team.id].total.reb += reb;
        acc[team.id].total.ast += ast;
        
        return acc
    },  {})

    console.log(stats);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            {Object.values(playersByTeam).map(({ name, players, total }) => (
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg" key={name}>
                                    <h2 className="font-bold p-3">{name}</h2>
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-2">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Név
                                                </th>
                                                <th scope='col' className='px-6 py-3'>
                                                    Játékpercek
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Dobóhatékonyság
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Triplák
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Büntetők
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Lepattanók
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Asszisztok
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Pontok
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {players.filter(({min}) => parseInt(min) > 0).sort((a,b) => b.pts-a.pts).map(({ id, first_name, last_name, fga, fgm, fg3a, fg3m, fta, ftm, pts, reb, ast, min}) => (
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={id}>
                                                        <th scope="row" className="px-6 py-4">{ first_name }  { last_name }</th>
                                                        <td className='px-6 py-4'>{ parseInt(min) }</td>
                                                        <td className="px-6 py-4">{ fgm } - { fga }</td>
                                                        <td className="px-6 py-4">{ fg3m } - { fg3a }</td>
                                                        <td className='px-6 py-4'>{ ftm } - { fta }</td>
                                                        <td className="px-6 py-4">{ reb }</td>
                                                        <td className="px-6 py-4">{ ast }</td>
                                                        <td className="px-6 py-4">{ pts }</td>
                                                    </tr>
                                                ))}
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <th scope="row" className="px-6 py-4">Összesen</th>
                                                        <td className='px-6 py-4 font-bold'></td>
                                                        <td className="px-6 py-4 font-bold">{ total.fgm } - { total.fga }</td>
                                                        <td className="px-6 py-4 font-bold">{ total.fg3m } - { total.fg3a }</td>
                                                        <td className='px-6 py-4 font-bold'>{ total.ftm } - { total.fta }</td>
                                                        <td className="px-6 py-4 font-bold">{ total.reb }</td>
                                                        <td className="px-6 py-4 font-bold">{ total.ast }</td>
                                                        <td className="px-6 py-4 font-bold">{ total.pts }</td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <th scope="row" className="px-6 py-4">Átlag</th>
                                                        <td className="px-6 py-4 font-bold"></td>
                                                        <td className="px-6 py-4 font-bold">{ (total.fgm / total.fga * 100).toFixed(1) }%</td>
                                                        <td className="px-6 py-4 font-bold">{ (total.fg3m / total.fg3a * 100).toFixed(1) }%</td>
                                                        <td className='px-6 py-4 font-bold'>{ (total.ftm / total.fta * 100).toFixed(1) }%</td>
                                                    </tr>
            
                                                {stats.length === 0 && (
                                                    <tr>
                                                        <td
                                                            className="px-6 py-4 border-t"
                                                            colSpan="4"
                                                        >
                                                            No details for the match you've been looking for.
                                                        </td>
                                                    </tr>
                                                )}
                                        </tbody>
                                    </table>
                                        <Pagination links={stats.links} />
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
