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
                    <p>Hey.</p>
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
