import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Show(props){
    const [sortedPosts, setSortedPosts] = useState([]);
    const { community, posts } = usePage().props;
    const isLoggedIn = Boolean(props.auth.user == null);

    console.log(typeof {posts});
     
    useEffect(() => {
        const sortNew = document.querySelector('.timeSorted');

        sortNew.addEventListener('click', () => {
            console.log('working');
            const sorted = Object.values(posts).sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });
            setSortedPosts(sorted);
        });
    }, [posts]);

    console.log({posts});
    console.log({community});
    console.log(isLoggedIn);

    return (
        <> 
            <Head title={community.name} />
            <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<><h2 className="font-semibold text-xl text-gray-800 leading-tight justify-center items-center flex">Welcome to {community.name} forum!</h2>
            <div className="py-12 flex items-center justify-center">
            <Link href={route('forums.posts.create', community.name)}>
            <PrimaryButton>Create Post</PrimaryButton></Link>
            </div>
            </>}
            >
            <div>
                <PrimaryButton className='timeSorted'>Sort by new</PrimaryButton>
            </div>
            <section className='flex md:flex-row m-2 p-2'>
                <div className='w-8/12'>
                {posts.data.map(({ id, title, description, username, slug }) => (
                    <div className="m-3 p-6 max-w-4xl bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="mr-4">Upvote</div>
                        <div>
                            <div className="flex m-2 p-2">
                                <div className="flex">Posted by
                                <span className="ml-1">{ username }</span>
                                </div>
                            </div>
                            <a className="text-2xl font-bold">{ title }</a>
                            <p>{ description }</p>
                            <div className="flex m-2 p-2">
                            <p className="mr-4 p-2">Comments</p>
                                <Link href={route('posts.show', [community.name, slug])} className="inline-flex items-center text-sm text-center px-2 py-3">Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <div className='w-4/12 p-4'>
                    <div className="m-2 p-2 bg-slate-500 text-white">
                        <h2>Other communities</h2>
                    </div>
                </div>
            </section>
            </AuthenticatedLayout>
        </>
    );
}