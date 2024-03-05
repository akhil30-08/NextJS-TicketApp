'use client';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BASE_URL } from '../(utils)/utils';
import { useRouter } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const res = await fetch(`${BASE_URL}/api/Tickets/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className='text-red-400 hover:cursor-pointer hover:text-red-200 '
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
