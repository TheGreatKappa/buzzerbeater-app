import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-gray-600">
                Köszönjük regisztrációdat! Mielőtt belekezdenél az oldalon való böngészésbe, kérjük erősítsd meg az e-mail címed az általunk
                küldött e-mailben található linkre kattintva. Ha nem kaptál e-mailt, küldünk egy újat.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    Egy új e-mailt küldtünk a megadott címre. Kérjük ellenőrizd a spam mappát is.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton processing={processing}>Megerősítő e-mail újraküldése</PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Kijelentkezés
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
