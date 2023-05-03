import { Head, usePage, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Voting from '@/Components/Voting';

export default function Show(props){
    const { post, community } = usePage().props;
    const [showReplyForm, setShowReplyForm] = useState(false);
    const PostedByLoggedUser = Boolean(post.data.owner);
    console.log({post});
    console.log({community});
    console.log({PostedByLoggedUser});

    console.log(post.data.comments);
    console.log(post.data.replies);

    const form = useForm({
        'content': '',
        'parent_id': null,
    });

    const reply = useForm({
        'content': '',
        'parent_id': '',
    });

    const submit = (e) => {
        e.preventDefault();

        form.post(route('posts.comments', [community.slug, post.data.slug]), {
            onSuccess: () => form.reset('content')
        });
    };

    const submitReply = (commentID) => (e) => {
        e.preventDefault();

        const comment = post.data.comments.find((c) => c.id === commentID);

        reply.post(route('posts.comments.reply', [community.slug, post.data.slug, comment.id]), {
            onSuccess: () => {
                reply.reset('content'),
                setShowReplyForm(false)
            }
        });
    };

    return(
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
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
                                    <Link className="hover:text-blue-500" href={route('forums.posts.edit', [community.slug, post.data.slug])}>Edit</Link>
                                    <Link className="ml-2 hover:text-red-500" href={route('forums.posts.destroy', [community.slug, post.data.slug])} method="delete">Delete</Link>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <Voting post={post.data.slug} upvotes={post.data.upvotes} votes={post.data.votes[0].vote}/>
                        <h1 className="font-semibold text-2xl text-black">{post.data.title}</h1>
                        <p className="text-slate-600">{post.data.description}</p>
                        <a href={post.url} className="text-blue-500 font-semibold text-sm hover:text-blue-300">{post.data.url}</a>
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
                        <hr></hr>
                        <div>
                            <ul role="list" className="divide-y divide-gray-200 m-2 p-2">
                                {post.data.comments.map((comment) => (
                                    <li key={comment.id} className="py-4 flex">
                                        <div className="ml-3">
                                            Comment by
                                            <span className="text-sm font-medium text-gray-900 ml-1">{comment.username}</span>
                                            <div className="mt-2 text-sm text-gray-700">
                                                <p className="m-2 p-2">{comment.comment}</p>
                                            </div>
                                            <div>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => setShowReplyForm(comment.id)}>Válasz</button>
                                            </div>
                                            {showReplyForm && (
                                                <form onSubmit={submitReply(comment.id)}>
                                                    <div>
                                                    <label
                                                        htmlFor={`reply-${comment.id}`}
                                                        className="block m-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                                                    >
                                                        Válasz
                                                    </label>
                                                    <textarea
                                                        name={`reply-${comment.id}`}
                                                        id={`reply-${comment.id}`}
                                                        rows="4"
                                                        value={reply.data.content}
                                                        onChange={e => reply.setData('content', e.target.value)}
                                                        className="rounded-lg block w-full text-sm p-2 text-gray-900 bg-gray-100 border"
                                                    ></textarea>
                                                    </div>
                                                    <div className="mt-4">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                        Küldés
                                                    </button>
                                                    </div>
                                                </form>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>        
                        </div>
                        <hr></hr>
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