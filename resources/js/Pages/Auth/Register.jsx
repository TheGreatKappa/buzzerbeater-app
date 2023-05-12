import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const [favTeam, setFavTeam] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        favorite_player: '',
        favorite_team: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        if (event.target.name === "favorite_team") {
            setFavTeam(event.target.value);
            setData(event.target.name, event.target.value);
        } else {
            setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Név" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="username" value="Felhasználónév" />

                    <TextInput
                        id="username"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="email" value="E-mail" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Jelszó" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Jelszó megerősítése" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="favorite_team" value="Kedvenc NBA csapatod"/>

                    <select id="favorite_team" name="favorite_team" onChange={onHandleChange} value={favTeam} className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full">
                        <option disabled selected value="">Válaszd ki kedvenced, amennyiben van!</option>
                        <option>Atlanta Hawks</option>
                        <option>Boston Celtics</option>
                        <option>Brooklyn Nets</option>
                        <option>Charlotte Hornets</option>
                        <option>Chicago Bulls</option>
                        <option>Cleveland Cavaliers</option>
                        <option>Dallas Mavericks</option>
                        <option>Denver Nuggets</option>
                        <option>Detroit Pistons</option>
                        <option>Golden State Warriors</option>
                        <option>Houston Rockets</option>
                        <option>Indiana Pacers</option>
                        <option>Los Angeles Clippers</option>
                        <option>Los Angeles Lakers</option>
                        <option>Memphis Grizzlies</option>
                        <option>Miami Heat</option>
                        <option>Milwaukee Bucks</option>
                        <option>Minnesota Timberwolves</option>
                        <option>New Orleans Pelicans</option>
                        <option>New York Knicks</option>
                        <option>Oklahoma City Thunder</option>
                        <option>Orlando Magic</option>
                        <option>Philadelphia 76ers</option>
                        <option>Phoenix Suns</option>
                        <option>Portland Trail Blazers</option>
                        <option>Sacramento Kings</option>
                        <option>San Antonio Spurs</option>
                        <option>Toronto Raptors</option>
                        <option>Utah Jazz</option>
                        <option>Washington Wizards</option>
                    </select>
                </div>

                <div className="mt-4">
                    <InputLabel forInput="favorite_player" value="Kedvenc játékosod" />

                    <TextInput
                        id="favorite_player"
                        name="favorite_player"
                        value={data.favorite_player}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-300 dark:hover:text-gray-400"
                    >
                        Már regisztráltál?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Regisztráció
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
