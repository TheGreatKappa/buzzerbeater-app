import { Link } from '@inertiajs/react';

export default function Voting({post}){
    return(
        <div className="w-12 flex flex-col items-center m-2 p-2">
            <Link href={route('posts.upvote', post)} className="text-gray-700 hover:text-green-500" method="post" type="button" as="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </Link>
            <div>4k</div>
            <Link href={route('posts.downvote', post)} className="text-gray-700 hover:text-red-500" method="post" type="button" as="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </Link>
        </div>
    )
}