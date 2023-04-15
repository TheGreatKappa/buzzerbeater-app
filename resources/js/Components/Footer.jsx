import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
      <footer className="fixed bottom-0 left-0 w-full text-center p-3 sm:text-sm lg:text-base hidden md:block">
        Made with ❤️ by <Link href='https://github.com/TheGreatKappa'>Kappa</Link> &copy; {new Date().getFullYear()}
      </footer>
    );
}
  