import NextLink from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ href, text }: { href: any, text: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NextLink href={{ pathname: href, query: { showNav: href !== '/' } }} className={` xl:ml-0 ${isActive
      ? ' font-bold text-[#FCEE09]'
      : ' team2  font-800 text-[#FCEE09]  dark:text-gray-400 text-2xl'
      } 'hidden md:inline-block p-1 sm:px-4 sm:py-2 rounded-full hover:text-white  hover:background:[#FCEE09] , dark:hover:bg-midnight transition-all`}>

      <span
        className={`${isActive
          ? 'py-2 border-b-2 border-teal-400 dark:border-teal-500'
          : 'capsize'
          } `}
      >
        {text}
      </span>

    </NextLink>
  );
};

export default NavItem