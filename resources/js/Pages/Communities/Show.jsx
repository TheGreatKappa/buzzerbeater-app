import GuestLayout from '@/Layouts/GuestLayout';
import { usePage } from '@inertiajs/react';

export default function Show(){
     const { community } = usePage().props;

     console.log(community);

     return (
          <GuestLayout>
               <p>Welcome to {community.name} forum!</p>
          </GuestLayout>
     );
}