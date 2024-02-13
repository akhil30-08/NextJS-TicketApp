import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav className='flex justify-between bg-nav p-2'>
      <div className='flex items-center gap-2'>
        <Link href='/'>
          <FontAwesomeIcon icon={faHome} className='icon' />
        </Link>
        <Link href='/TicketPage/new'>
          <FontAwesomeIcon icon={faTicket} className='icon' />
        </Link>
      </div>
      <div>
        <p className='text-default-text'>akhil@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
