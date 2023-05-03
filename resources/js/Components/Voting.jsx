import { Link } from '@inertiajs/react';

export default function Voting({post, upvotes, votes}){
    return(
        <div className="w-12 flex flex-col h-full items-center p-2">
            <Link href={route('posts.upvote', post)} className={`text-${votes === 1 ? 'green-500' : 'gray-700'} hover:text-green-500`} method="post" type="button" as="button" preserveScroll>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </Link>
            <div>{upvotes}</div>
            <Link href={route('posts.downvote', post)} className={`text-${votes === -1 ? 'red-600' : 'gray-700'} hover:text-red-600`} method="post" type="button" as="button" preserveScroll>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </Link>
        </div>
    )
}