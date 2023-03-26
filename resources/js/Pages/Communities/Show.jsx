import GuestLayout from '@/Layouts/GuestLayout';
import { usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Show(props){
     const { community } = usePage().props;
     const isLoggedin = props.auth.user;

     console.log(community);
     console.log(isLoggedin);

     if (isLoggedin) {
          return (
               <GuestLayout>
                    <p>Welcome to {community.name} forum!</p>
                    <PrimaryButton>Create Post</PrimaryButton>
               </GuestLayout>
          );
     }
     return (
          <GuestLayout>
               <p>Welcome to {community.name} forum!</p>
          </GuestLayout>
     )
}