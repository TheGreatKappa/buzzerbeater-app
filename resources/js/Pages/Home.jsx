import GuestLayout from "@/Layouts/GuestLayout";
import { Link, Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Home(){

    return (
    <>
    <Head title="Üdvözlünk az oldalon!"></Head>

    <GuestLayout>
        <div>
            <p className="text-center dark:text-gray-200">Üdvözöllek a BuzzerBeater weboldalon!<br />Bejelentkezést vagy regisztrációt követően hozzáférsz az oldal tartalmához.<br /></p>
        </div>
        <div className="flex justify-evenly">
            <Link href={route('login')}><PrimaryButton className="mt-4">Bejelentkezés</PrimaryButton></Link>
            <Link href={route('register')}><PrimaryButton className="mt-4">Regisztráció</PrimaryButton></Link>
        </div>
    </GuestLayout>
    </>
    );
}