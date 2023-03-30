import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Show(props){
     const { community } = usePage().props;
     const isLoggedIn = Boolean(props.auth.user == null);

     console.log({community});
     console.log(isLoggedIn);
 
     return (
         <>
             {isLoggedIn ? (
                 <GuestLayout>
                    <p>Welcome to {community.name} forum!</p>
                 </GuestLayout>
             ) : (
                 <AuthenticatedLayout
                     auth={props.auth}
                     errors={props.errors}
                 >
                    <p>Welcome to {community.name} forum!</p>
                    <Link href={route('forums.posts.create', community.name)}><PrimaryButton>Create Post</PrimaryButton></Link>
                 </AuthenticatedLayout>
             )}
         </>
     );
}