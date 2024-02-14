import TicketForm from '@/app/(components)/TicketForm';
import React from 'react';

const TicketPage = ({ params }) => {
  const { id } = params;

  return <TicketForm />;
};

export default TicketPage;
