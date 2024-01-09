import Image from 'next/image';
import TicketCard from './components/TicketCard';

const getTickets = async () => {
  try {
    const res = await fetch('https://ticket-app-git-main-seenivasababus-projects.vercel.app/api/tickets', {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.log('Failed to get ticket', error);
  }
};

export type Ticket = {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  createdAt: any;
};
export default async function Home() {
  const { tickets }: { tickets: Ticket[] } = await getTickets();

  if (!tickets || tickets.length === 0) {
    return <h2>No tickets found</h2>;
  }
  console.log(tickets);

  const uniqueCategories = [
    'Hardware Problems',
    'Project',
    'Software problems',
  ];

  return (
    <div className="p-3">
      <div>
        {tickets &&
          uniqueCategories.map((category, index) => (
            <div key={index} className="mb-4">
              <h2>{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {tickets
                  .filter((ticket) => ticket.category === category)
                  .map((filteredTicket, _ind) => (
                    <TicketCard key={_ind} ticket={filteredTicket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
