import { Link, Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Welcome(props) {
    const isLoggedIn = Boolean(props.auth.user == null);

    return (
        <>
        <Head title="Welcome" />

        {isLoggedIn ? (
            <GuestLayout>
                <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                    <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                            <>
                                <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                                >
                                    Register
                                </Link>
                            </>
                    </div>
                    <div className="flex h-screen">
                        <p>Soon TM</p>
                    </div>
                </div>
            </GuestLayout>
        ) : (
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">WELCOME!</div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        )}
        </>
    );
}
