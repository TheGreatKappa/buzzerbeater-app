import { Link } from '@inertiajs/react';

export default function Sidebar({ forums }) {
  return (
    <div className="w-full bg-white shadow-sm rounded-b-md dark:bg-gray-200">
      <ul role="list" className="divide-y divide-slate-300 dark:divide-slate-700">
        {forums.data.map(({ id, slug, posts_count }) => (
          <li key={id} className="px-4 py-4 dark:bg-gray-300">
            <div className="flex items-center space-x-4">
              <div>
                <Link href={route('community.show', slug)} className="font-semibold hover:text-blue-700">{slug}</Link>
                <span className="ml-2">Posztok ({posts_count})</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

