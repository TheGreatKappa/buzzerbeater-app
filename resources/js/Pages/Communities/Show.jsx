import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import Voting from '@/Components/Voting';
import Sidebar from '@/Components/Sidebar';

export default function Show(props){
    const { community, posts } = usePage().props;
    
    console.log({posts});
    console.log({community});

    return (
        <> 
            <Head title={community.name} />
            <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<><h2 className="font-semibold text-xl text-gray-800 leading-tight justify-center items-center flex">Üdvözlünk a {community.name} fórumon!</h2>
            <div className="py-12 flex items-center justify-center">
            <Link href={route('forums.posts.create', community.slug)}>
            <PrimaryButton>Poszt hozzáadása</PrimaryButton></Link>
            </div>
            </>}
            >
            <section className='flex flex-col md:flex-row m-2 p-2'>
                <div className='w-full md:w-8/12'>
                {posts.data.map(({ id, title, description, username, slug, upvotes, votes, comments }) => (
                    <div className="m-2 p-2 bg-white">
                        <Voting post={slug} upvotes={upvotes} votes={votes.length > 0 ? votes[0].vote : 0}/>
                        <div>
                            <div className="flex m-2 p-2">
                                <span className="font-semibold">{ username }</span>
                                <span className="ml-1">posztja</span>
                            </div>
                            <a className="text-2xl font-bold ml-4">{ title }</a>
                            <p className="ml-4">{ description }</p>
                            <div className="flex m-2 p-2">
                            <Link href={route('posts.show', [community.slug, slug])} className="inline-flex items-center text-sm text-center px-2 py-3">Hozzászólások({ comments })</Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <div className='w-full md:w-4/12 p-4'>
                    <div className="m-2 p-2 bg-slate-500 text-white rounded-sm">
                        <h2>Fórumok, amik érdekelhetnek</h2>
                    </div>
                </div>
            </section>
            </AuthenticatedLayout>
        </>
    );
}