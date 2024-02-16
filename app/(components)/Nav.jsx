'use client';

import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex justify-between bg-nav p-2'>
      <div className='flex items-center gap-2'>
        <Link href='/'>
          <FontAwesomeIcon
            icon={faHome}
            className={`p-1 rounded-md icon ${
              pathname === '/' && 'bg-green-500 transition'
            }`}
          />
        </Link>
        <Link href='/TicketPage/new'>
          <FontAwesomeIcon
            icon={faTicket}
            className={`icon p-1 rounded-md ${
              pathname.includes('/TicketPage') && 'bg-green-500 transition'
            }`}
          />
        </Link>
      </div>
      <div>
        <p className='text-default-text text-base md:text-2xl stroke-gray-800'>
          Ticket Creation App
        </p>
      </div>
    </nav>
  );
};

export default Nav;
