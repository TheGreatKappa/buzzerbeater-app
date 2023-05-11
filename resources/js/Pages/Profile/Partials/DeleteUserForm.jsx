import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">Fiók törlése</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
                    Amennyiben felhasználói fiókod törlése mellett döntesz, minden adatod véglegesen törlésre kerül.
                    Kérlek, hogy mielőtt végleges törlésre kerülne a fiókod, kérd le az összes adatodat, amit meg
                    szeretnél őrizni.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>Fiók törlése</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">
                        Biztosan törölni szeretnéd a fiókodat?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
                        Amennyiben felhasználói fiókod törlése mellett döntesz, minden adatod véglegesen törlésre kerül.
                        Írd be a jelszavad, ha valóban törölni szeretnéd a fiókodat.
                    </p>

                    <div className="mt-6">
                        <InputLabel for="password" value="Jelszó" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            handleChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Visszalépés</SecondaryButton>

                        <DangerButton className="ml-3" processing={processing}>
                            Fiók törlése
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
