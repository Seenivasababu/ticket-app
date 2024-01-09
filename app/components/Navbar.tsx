import Link from 'next/link';
import React from 'react';
import { FaHome, FaTicketAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-200 p-3">
      <div className="flex items-center space-x-4">
        <Link href={'/'}>
          {' '}
          <FaHome />{' '}
        </Link>
        <Link href={'/ticketPage/new'}>
          {' '}
          <FaTicketAlt />
        </Link>
      </div>
      <div>
        <p className="text-1xl">xyz@gmail.com</p>
      </div>
    </nav>
  );
};

export default Navbar;
