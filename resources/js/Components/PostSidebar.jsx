import { Link } from '@inertiajs/react';

export default function Sidebar({ posts, community_slug }) {
  return (
    <div className="w-full bg-white shadow-sm rounded-b-md dark:bg-gray-200">
      <ul role="list" className="divide-y divide-slate-300 dark:divide-slate-700">
        {posts.data.map(({ id, slug, upvotes }) => (
          <li key={id} className="px-4 py-4">
            <div className="flex items-center space-x-4">
              <div>
                <Link href={route('posts.show', [community_slug, slug])} className="font-semibold hover:text-blue-700 dark:hover:text-indigo-300">{slug}</Link>
                <span className="ml-2">{upvotes} szavazattal</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

