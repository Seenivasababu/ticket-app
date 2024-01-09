import TicketForm from '@/app/components/TicketForm';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};
const getDataById = async (id: String) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`,{cache:"no-store"});
  const data = await res.json();
  return data.ticket;
};
export default async function page({ params: { id } }: Props) {
  let EDITMODE = id === 'new' ? false : true;

  let ticketDetail = {};

  if (EDITMODE) {
    const ticket = await getDataById(id);
    ticketDetail = ticket;
  } else {
    ticketDetail = {
      _id: 'new',
    };
  }

  return (
    <div>
      <TicketForm ticket={ticketDetail}/>
    </div>
  );
}
