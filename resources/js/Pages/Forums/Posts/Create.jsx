import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm, usePage } from '@inertiajs/react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Create(props){
    const {forum} = usePage().props;

    const {data, processing, errors, setData, post} = useForm({
        'title': '',
        'url': '',
        'description': '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('forums.posts.index', forum.slug));
    };

    return(
        <>
            <ToastContainer />

            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Poszt készítése</h2>}
            >
                <Head title="Poszt készítése" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-md mx-auto bg-white m-2 p-6">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel forInput="title" value="Title" />

                                    <TextInput
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autoComplete="title"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        //required
                                    />

                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="url" value="Url" />

                                    <TextInput
                                        id="url"
                                        name="url"
                                        value={data.url}
                                        className="mt-1 block w-full"
                                        autoComplete="url"
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.url} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="description" value="Description" />

                                    <TextInput
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        autoComplete="description"
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.description} className="mt-2" />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton className="ml-4" processing={processing}>
                                        Create
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};