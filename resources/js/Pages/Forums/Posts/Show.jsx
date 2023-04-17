import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Show(props){
    const { post } = usePage().props;
    console.log({post});

    return(
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title={post.title} />
        </AuthenticatedLayout>
    )
}