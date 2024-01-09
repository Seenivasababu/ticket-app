import React from 'react';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import Progressbar from './Progressbar';
import StatusDisplay from './StatusDisplay';
import { Ticket } from '../page';
import Link from 'next/link';

const TicketCard = ({ ticket }: { ticket: Ticket }) => {
  return (
    <div className="flex flex-col bg-slate-200 hover:bg-slate-300 rounded-md shadow-lg m-2 p-3">
      <div className="flex mb-2">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/ticketPage/${ticket._id}`}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-gray-500 mb-2" />
        <p className="whitespace-pre-wrap">T{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2 items-center">
          <div className="flex flex-col ">
            <p className="text-xs my-1">{ticket.createdAt}</p>
            <Progressbar progress={ticket.progress} />
          </div>
          <div className="ml-auto">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
