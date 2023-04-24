import { Head, usePage, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Show(props){
    const { post, community } = usePage().props;
    const PostedByLoggedUser = Boolean(post.data.owner);
    console.log({post});
    console.log({community});
    console.log({PostedByLoggedUser});

    return(
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{post.data.title}</h2>}
        >
            <Head title={post.data.title} />

            <section className="flex flex-col md:flex-row m-2 p-2">
                 <div className="w-full md:w-8/12">
                    <div className="m-2 p-2 bg-white rounded">
                        <h2 className="font-semibold text-2xl text-black">
                            <Link href={route('community.show', community.slug)}>{community.name}</Link>
                        </h2>
                    </div>
                    <div className="m-2 p-2 bg-white rounded text-sm text-slate-400">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div>
                                Posted by
                                <span className=" text-slate-500 ml-1">{post.data.username}</span>
                            </div>
                            <div>
                                {PostedByLoggedUser ? (
                                    <>
                                    <Link href={route('forums.posts.edit', [community.slug, post.data.slug])}>Edit</Link>
                                    <Link className="ml-2" href={route('forums.posts.destroy', [community.slug, post.data.slug])} method="delete">Delete</Link>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <h1 className="font-semibold text-2xl text-black">{post.data.title}</h1>
                        <p className="text-slate-600">{post.data.description}</p>
                        <a href={post.url} className="text-blue-500 font-semibold text-sm hover:text-blue-300">{post.data.url}</a>
                    </div>
                 </div>
                <div className="w-full md:w-4/12">
                    <div className="m-2 p-2 bg-white rounded">
                        <h2 className="font-semibold text-2xl text-black">About Community</h2>
                        <p className="text-slate-600">{community.description}</p>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    )
}