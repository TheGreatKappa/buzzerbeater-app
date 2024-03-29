import { Link } from '@inertiajs/react';
  
export default function Pagination({ links }) {
  
    function getClassName(active) {
        if(active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-blue-400 focus:border-primary focus:text-primary bg-blue-500 text-white";
        } else{
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }
  
    return (
        links && links.length > 3 && (
            <div className="mb-2">
                <div className="flex flex-wrap mt-4 ml-2">
                    {links.map((link) => (
                            link.url === null ?
                                    (<div
                                            className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        ></div>) :
  
                                    (<Link
                                                className={getClassName(link.active)}
                                                href={ link.url }
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            ></Link>)
                                    ))}
                </div>
            </div>
        )
    );
}