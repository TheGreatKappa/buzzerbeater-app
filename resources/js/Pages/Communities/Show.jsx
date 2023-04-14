import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Show(props){
     const { community, posts } = usePage().props;
     const isLoggedIn = Boolean(props.auth.user == null);

     console.log({posts});
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
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight justify-center items-center flex">Welcome to {community.name} forum!</h2>}
                 >
                    <div className="py-12 flex items-center justify-center">
                        <Link href={route('forums.posts.create', community.name)}>
                        <PrimaryButton>Create Post</PrimaryButton></Link>
                    </div>
                    {posts.data.map(({ id, title, description, username }) => (
                        <div className="m-3 p-6 max-w-4xl bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="mr-4">Upvote</div>
                            <div>
                                <div className="flex m-2 p-2">
                                    <div className="flex">Posted by
                                    <span className="ml-1">{ username }</span>
                                    </div>
                                </div>
                                <a href="#" className="text-2xl font-bold">{ title }</a>
                                <p>{ description }</p>
                                <div className="flex m-2 p-2">
                                <p className="mr-4 p-2">Comments</p>
                                    <a href="#" className="inline-flex items-center text-sm text-center px-2 py-3">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                 </AuthenticatedLayout>
             )}
         </>
     );
}