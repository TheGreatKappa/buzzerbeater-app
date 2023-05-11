import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Feedback(props) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        option: '',
        description: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('feedback.mail'));
    };

    console.log(props.errors);

    return (
        <AuthenticatedLayout
            auth = {props.auth}
            errors = {props.errors}
            header={<><h2 className="font-semibold text-xl text-gray-800 leading-tight dark:text-gray-200">Visszajelzés</h2>
            <p className="text-gray-500 mt-2 dark:text-gray-300">Hibát találtál, esetleg fejlesztéssel kapcsolatos észrevételeid lennének? Küldd el nekünk az alábbi űrlapon keresztül!</p></>
            }
        >
        
        <Head title="Visszajelzés" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white dark:bg-gray-600 rounded m-2 p-6">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <InputLabel forInput="option" value="Észrevétel típusa" />

                            <select id="option" name="option" className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full">
                                <option>Hiba bejelentése</option>
                                <option>Javaslat fejlesztésre</option>
                                <option>Egyéb javaslat</option>
                                <option>Más felhasználóval kapcsolatos probléma</option>
                            </select>
                        </div>

                        <div className="mt-4">
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
                            <InputLabel forInput="email" value="E-mail" />

                            <TextInput
                                id="email"
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
                            <InputLabel forInput="description" value="Kifejtés" />

                            <TextInput
                                id="description"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                autoComplete="description"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.description} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton className="ml-4" processing={processing}>
                                Visszajelzés küldése
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        </AuthenticatedLayout>
    )
}