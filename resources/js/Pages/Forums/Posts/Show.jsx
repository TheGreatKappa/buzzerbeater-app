import { Head, usePage, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Show(props){
    const { post, community } = usePage().props;
    const PostedByLoggedUser = Boolean(post.data.owner);
    console.log({post});
    console.log({community});
    console.log({PostedByLoggedUser});

    const form = useForm({
        'content': '',
    });

    const submit = (e) => {
        e.preventDefault();

        form.post(route('posts.comments', [community.slug, post.data.slug]), {
            onSuccess: () => form.reset('content')
        });
    };

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
                        <hr></hr>
                        <div className="flex flex-col md:flex-row justify-between">
                            <ul role="list" className="divide-y divide-gray-200 m-2 p-2">
                                {post.data.comments.map((comment) => (
                                    <li key={comment.id} className="py-4 flex">
                                        <div className="ml-3">
                                            Comment by
                                            <span className="text-sm font-medium text-gray-900 ml-1">{comment.username}</span>
                                            <div className="mt-2 text-sm text-gray-700">
                                                <p className="m-2 p-2">{comment.comment}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>        
                        </div>
                        <hr></hr>
                        <div>
                            <form className="m-2 p-2 max-w-md" onSubmit={submit}>
                                <div>
                                    <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Hozzászólás</label>
                                    <textarea 
                                        name="content" 
                                        id="content" 
                                        rows="4" 
                                        value={form.data.content} 
                                        onChange={e => form.setData('content', e.target.value)}
                                        className="rounded-lg block w-full text-sm p-2 text-gray-900 bg-gray-100 border">
                                    </textarea>
                                </div>
                                <div className="mt-4">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hozzászólás</button>
                                </div>
                            </form>
                        </div>
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