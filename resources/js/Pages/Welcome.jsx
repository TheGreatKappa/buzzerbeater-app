import { Link, Head, usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Voting from '@/Components/Voting';
import Sidebar from '@/Components/Sidebar';

export default function Welcome(props) {
    const { posts, forums } = usePage().props;
    const isLoggedIn = Boolean(props.auth.user == null);

    console.log(posts);
    console.log(forums);
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
                {posts.data.map(({ id, title, description, username, slug, upvotes, votes, forum_slug, comments, created_at }) => (
                    <div className="m-3 p-6 max-w-4xl bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="w-auto">
                            <div className="flex m-2 p-2">
                                <Voting post={slug} upvotes={upvotes} votes={votes.length > 0 ? votes[0].vote : 0}/>
                                    <div className="flex items-center justify-center">
                                        <span className="ml-1">{ username } posztja a <Link href={route('community.show', forum_slug)} className="hover:text-blue-700">{ forum_slug }</Link> fórumon { created_at }</span>
                                    </div>
                            </div>
                        </div>
                        <div className="grow">
                            <Link href={route('posts.show', [forum_slug, slug])} className="text-2xl font-bold ml-8 hover:text-blue-700">{ title }</Link>
                            <p className="ml-8">{ description }</p>
                            <div className="flex m-2 p-2">
                            <Link href={route('posts.show', [forum_slug, slug])} className="inline-flex items-center text-sm text-center px-2 py-3 ml-8 hover:text-blue-700">Hozzászólások({ comments })</Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <div className='w-full md:w-4/12 p-4'>
                    <div className=" p-2 bg-slate-500 text-white shadow-sm rounded-t-md">
                        <h2>Legnépszerűbb fórumok</h2>
                    </div>
                    <Sidebar forums={forums}/>
                </div>
            </section>
            </AuthenticatedLayout>
        )}
        </>
    );
}
