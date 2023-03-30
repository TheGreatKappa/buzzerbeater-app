import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function API(props) {
    const isLoggedIn = Boolean(props.auth.user == null);

    console.log(isLoggedIn);

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
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">API</h2>}
                >
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">Here should lie an API page sooner or later.</div>
                            </div>
                        </div>
                    </div>
                </AuthenticatedLayout>
            )}
        </>
    );
}
