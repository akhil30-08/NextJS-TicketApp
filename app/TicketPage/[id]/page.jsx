import TicketForm from '@/app/(components)/TicketForm';
import { BASE_URL } from '@/app/(utils)/utils';
import React from 'react';

const getTicketById = async (id) => {
  try {
    const ticket = await fetch(`${BASE_URL}/api/Tickets/${id}`, {
      cache: 'no-store',
      method: 'GET',
    });

    return ticket.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = async ({ params }) => {
  const { id } = params;
  let ticketToEdit;

  if (id !== 'new') {
    const ticket = await getTicketById(id);

    ticketToEdit = ticket.foundTicket;
  }

  return <TicketForm ticketToEdit={ticketToEdit} />;
};

export default TicketPage;
