import { Head, usePage, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Voting from '@/Components/Voting';
import PostSidebar from '@/Components/PostSidebar';

export default function Show(props){
    const { post, community, latest, can_update, can_delete } = usePage().props;
    const [showReplyForms, setShowReplyForms] = useState(false);

    console.log({post});
    console.log({community});
    console.log({latest});
    console.log(can_update);
    console.log(can_delete);

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
                setShowReplyForms(false)
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
                    <div className="m-2 p-2 bg-white rounded dark:bg-gray-600">
                        <h2 className="font-semibold text-2xl text-black dark:text-gray-200">
                            <Link href={route('community.show', community.slug)}>{community.name}</Link>
                        </h2>
                    </div>
                    <div className="m-2 p-2 bg-white rounded text-sm dark:bg-gray-600">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="flex dark:text-gray-200">
                                <Voting post={post.data.slug} upvotes={post.data.upvotes} votes={post.data.votes.length > 0 ? post.data.votes[0].vote : 0}/>
                                <div className="flex items-center justify-center">
                                    <span className="text-black dark:text-gray-200">{post.data.username} posztja {post.data.created_at}</span>
                                </div>
                            </div>
                            <div>
                                {can_update ? (
                                    <>
                                    <Link className="hover:text-blue-500 text-slate-500 dark:text-gray-200 dark:hover:text-indigo-300" href={route('forums.posts.edit', [community.slug, post.data.slug])}>Szerkesztés</Link>
                                    </>
                                ) : (
                                    <></>
                                )}
                                {can_delete ? (
                                    <>
                                    <Link className="hover:text-red-500 text-slate-500 ml-2 dark:text-gray-200 dark:hover:text-red-500" href={route('forums.posts.destroy', [community.slug, post.data.slug])} method="delete">Törlés</Link>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div>

                        </div>
                        <h1 className="font-semibold text-2xl text-black ml-4 dark:text-gray-400">{post.data.title}</h1>
                        <p className="text-slate-600 ml-4 mb-2 mt-1 dark:text-gray-300">{post.data.description}</p>
                        <a target="_blank" href={post.data.url} className="text-blue-500 font-semibold text-sm hover:text-blue-300 ml-4 mb-12 mt-1 dark:text-indigo-500 dark:hover:text-indigo-300">{post.data.url}</a>
                        <hr></hr>
                        <div>
                            <form className="m-2 p-2 max-w-md" onSubmit={submit}>
                                <div>
                                    <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hozzászólás</label>
                                    <textarea 
                                        name="content" 
                                        id="content" 
                                        rows="4" 
                                        value={form.data.content} 
                                        onChange={e => form.setData('content', e.target.value)}
                                        className="rounded-lg block w-full text-sm p-2 text-gray-900 bg-gray-100 border dark:bg-slate-500 dark:text-gray-200">
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
                                            <span className="text-sm font-semibold text-gray-900 ml-1 dark:text-gray-400">{comment.username}</span>
                                            { comment.owner ? (
                                                <>
                                                <Link className="ml-2 hover:text-red-500 text-slate-500 dark:text-gray-200 dark:hover:text-red-500" href={route('posts.comments.destroy', [community.slug, post.data.slug, comment.id])} method="delete">Törlés</Link>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                            <div className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                                                <p className="m-2 p-2">{comment.comment}</p>
                                            </div>
                                            <div>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => setShowReplyForms({ ...showReplyForms, [comment.id]: !showReplyForms[comment.id] })}>Válasz</button>
                                            </div>
                                            {showReplyForms[comment.id] && (
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
                                            {post.data.replies.map((reply) => (
                                                <div className="m-4" key={reply.id}>
                                                    {reply.parent_id === comment.id ? (
                                                        <>
                                                        <div>
                                                            <span className="text-sm font-semibold text-gray-900 ml-1 dark:text-gray-400">{reply.username}</span>
                                                            { reply.owner ? (
                                                                <>
                                                                <Link className="ml-2 hover:text-red-500 text-slate-500 dark:text-gray-200 dark:hover:text-red-500" href={route('posts.comments.reply.destroy', [community.slug, post.data.slug, reply.parent_id, reply.id])} method="delete">Törlés</Link>
                                                                </>
                                                            ) : (
                                                                <></>
                                                            )}
                                                            <div className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                                                                <p className="m-2 p-2">{reply.comment}</p>
                                                            </div>
                                                        </div>
                                                        </>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>        
                        </div>
                        <hr></hr>
                    </div>
                 </div>
                 <div className='w-full md:w-4/12 p-4'>
                    <div className="p-2 bg-slate-500 text-white rounded-t-sm dark:bg-gray-600">
                        <h2>A fórumról</h2>
                    </div>
                    <div className="rounded-b-sm">
                        <p className="bg-white font-semibold p-2 mb-4 dark:bg-gray-200">{ community.description }</p>
                    </div>
                    <div className="p-2 bg-slate-500 text-white rounded-t-sm dark:bg-gray-600">
                        <h2>További posztok a {community.name} fórumról</h2>
                    </div>
                    <PostSidebar posts={latest} community_slug={community.slug} />
                </div>
            </section>
        </AuthenticatedLayout>
    )
}

