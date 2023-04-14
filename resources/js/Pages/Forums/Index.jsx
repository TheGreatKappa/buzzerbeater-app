import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';

export default function Dashboard(props) {
    const { forums } = usePage().props;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Forums</h2>}
        >
            <Head title="Forums" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="m-2 p-2 text-right">
                            <Link type="button" href={route('forums.create')} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add forum</Link>
                        </div>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Slug
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {forums.data.map(({ id, name, slug }) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-6 py-4"><Link href={`/forum/${slug}`}>{ name }</Link></th>
                                            <td className="px-6 py-4">{ slug }</td>
                                            <td className="px-6 py-4 text-right">
                                                <Link href={route('forums.edit', id)} className="font-medium bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Edit</Link>
                                                <Link href={route('forums.destroy', id)} method="delete" className="ml-4 font-medium bg-red-500 hover:bg-red-400 text-white py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">Delete</Link>
                                            </td>
                                        </tr>
                                    ))}
  
                                    {forums.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                            <Pagination links={forums.links} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

