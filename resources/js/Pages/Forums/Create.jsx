import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function Create(props){
    const {data, processing, errors, setData, post} = useForm({
        'name': '',
        'description': '',
        'slug': '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('forums.index'));
    };

    return(
        <AuthenticatedLayout
            auth={props.auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Forum</h2>}
        >
            <Head title="Create Forum" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-md mx-auto bg-white m-2 p-6">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel forInput="name" value="Name" />

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
                                <InputLabel forInput="slug" value="Slug" />

                                <TextInput
                                    id="slug"
                                    name="slug"
                                    value={data.slug}
                                    className="mt-1 block w-full"
                                    autoComplete="slug"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError message={errors.slug} className="mt-2" />
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
                                    required
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
    );
};