
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const DeleteBlock = ({ id }: { id: String }) => {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <div
      className="text-red-700 hover:cursor-pointer hover:text-red-300"
      onClick={deleteTicket}
    >
      <RxCross2 />
    </div>
  );
};

export default DeleteBlock;
