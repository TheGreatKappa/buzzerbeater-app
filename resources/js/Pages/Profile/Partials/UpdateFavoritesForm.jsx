import { usePage, useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

export default function SetFavoritesForm({ className }) {
    const user = usePage().props.auth.user;
    console.log(user);
    const [ favTeam, setFavTeam ] = useState(user.favorite_team);

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        favorite_player: user.favorite_player,
        favorite_team: user.favorite_team,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };
    
    const onHandleChange = (event) => {
        setFavTeam(event.target.value);
        setData(event.target.name, event.target.value);
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">Kedvenceid</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
                    Ezen a felületen megváltoztathatod kedvenc játékosod és csapatod.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel for="favorite_player" value="Kedvenc játékos" />

                    <TextInput
                        id="favorite_player"
                        className="mt-1 block w-full"
                        value={data.favorite_player}
                        handleChange={(e) => setData('favorite_player', e.target.value)}
                        isFocused
                        autoComplete="favorite_player"
                    />

                    <InputError className="mt-2" message={errors.favorite_player} />
                </div>

                <div>
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

                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>Mentés</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-200">Változtatásaid mentésre kerültek.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}