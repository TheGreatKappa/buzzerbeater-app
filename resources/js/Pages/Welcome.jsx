import { Link, Head, usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Voting from '@/Components/Voting';
import Sidebar from '@/Components/Sidebar';
import RecommendedSidebar from '@/Components/RecommendedSidebar';

export default function Welcome(props) {
    const { posts, forums, recommended } = usePage().props;

    console.log(posts);
    console.log(forums);
    console.log(recommended);

    return (
        <>
        <Head title="Főoldal" />
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
            <section className='flex flex-col md:flex-row m-2 p-2'>
                <div className='w-full md:w-8/12'>
                {posts.data.map(({ id, title, description, username, slug, upvotes, votes, forum_slug, comments, created_at, forum_name }) => (
                    <div className="m-3 p-6 max-w-4xl bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-600">
                        <div className="w-auto">
                            <div className="flex m-2 p-2 dark:text-gray-200">
                                <Voting post={slug} upvotes={upvotes} votes={votes.length > 0 ? votes[0].vote : 0}/>
                                    <div className="flex items-center justify-cente">
                                        <span className="ml-1">{ username } posztja a <Link href={route('community.show', forum_slug)} className="hover:text-blue-700 dark:hover:text-indigo-300">{ forum_name }</Link> fórumon { created_at }</span>
                                    </div>
                            </div>
                        </div>
                        <div className="grow dark:text-gray-300">
                            <Link href={route('posts.show', [forum_slug, slug])} className="text-2xl font-bold ml-8 hover:text-blue-700 dark:hover:text-indigo-300">{ title }</Link>
                            <p className="ml-8 truncate">{ description }</p>
                            <div className="flex m-2 p-2">
                            <Link href={route('posts.show', [forum_slug, slug])} className="inline-flex items-center text-sm text-center px-2 py-3 ml-8 hover:text-blue-700 dark:hover:text-indigo-300">Hozzászólások({ comments })</Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <div className='w-full md:w-4/12 p-4'>
                    {forums.data.length > 0 ? (
                        <>
                            <div className=" p-2 bg-slate-500 text-white shadow-sm rounded-t-md dark:bg-gray-600">
                                <h2>Legnépszerűbb fórumok</h2>
                            </div>
                            <Sidebar forums={forums}/>
                        </>
                    ) : (
                        <></>
                    )}

                    {recommended.data.length > 0 ? (
                        <>
                            <div className="p-2 bg-slate-500 text-white shadow-sm rounded-t-md dark:bg-gray-600 mt-4">  
                                <h2>Ajánlott fórumok</h2>
                            </div>
                            <RecommendedSidebar forums={recommended}/>
                        </>
                    ) : (
                        <></>
                    )}

                </div>
            </section>
            </AuthenticatedLayout>
        </>
    );
}
