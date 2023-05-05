import { Link, Head, usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Voting from '@/Components/Voting';

export default function Welcome(props) {
    const { posts } = usePage().props;
    const isLoggedIn = Boolean(props.auth.user == null);

    console.log(posts);
    return (
        <>
        <Head title="Főoldal" />
        {isLoggedIn ? (
                <GuestLayout>
                    <div>
                        <p className="text-center">Üdvözöllek a BuzzerBeater weboldalon!<br />Bejelentkezést vagy regisztrációt követően hozzáférsz az oldal tartalmához.<br /></p>
                    </div>
                    <div className="flex justify-evenly">
                        <Link href={route('login')}><PrimaryButton className="mt-4">Bejelentkezés</PrimaryButton></Link>
                        <Link href={route('register')}><PrimaryButton className="mt-4">Regisztráció</PrimaryButton></Link>
                    </div>
                </GuestLayout>
        ) : (
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
            <section className='flex flex-col md:flex-row m-2 p-2'>
                <div className='w-full md:w-8/12'>
                {posts.data.map(({ id, title, description, username, slug, upvotes, votes, forum_slug, comments }) => (
                    <div className="m-3 p-6 max-w-4xl bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Voting post={slug} upvotes={upvotes} votes={votes[0].vote}/>
                        <div>
                            <div className="flex m-2 p-2">
                                <div className="flex">Posted by 
                                <span className="ml-1 font-semibold">{ username }</span>
                                <span className="ml-1">at</span>
                                <Link href={route('community.show', forum_slug)}><span className="ml-1 font-semibold">{ forum_slug }</span></Link>
                                <span className="ml-1">forum</span>
                                </div>
                            </div>
                            <a className="text-2xl font-bold">{ title }</a>
                            <p>{ description }</p>
                            <div className="flex m-2 p-2">
                            <p className="mr-4 p-2">Comments({ comments })</p>
                                <Link href={route('posts.show', [forum_slug, slug])} className="inline-flex items-center text-sm text-center px-2 py-3">Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <div className='w-full md:w-4/12 p-4'>
                    <div className="m-2 p-2 bg-slate-500 text-white">
                        <h2>Other communities</h2>
                    </div>
                </div>
            </section>
            </AuthenticatedLayout>
        )}
        </>
    );
}
