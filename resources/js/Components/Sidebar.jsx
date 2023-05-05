import Link from '@inertiajs/react';

export default function Sidebar() {
    return(
        <div>
            <ul role="list" className="divide-y divide-slate-200 dark:divide-slate-700">
                <li className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        <Link className="flex items-center space-x-3">

                        </Link>
                        <div>

                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}