import TicketCard from './(components)/TicketCard';
import { BASE_URL } from './(utils)/utils';

const getTickets = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/Tickets`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Dashboard() {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map((ticket) => ticket.category)),
  ];

  return (
    <section className='p-2 '>
      {tickets &&
        uniqueCategories?.map((uniqueCategory) => (
          <div key={uniqueCategory} className=' my-4'>
            <h2>{uniqueCategory}</h2>

            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket) => {
                  return (
                    <TicketCard
                      key={filteredTicket._id}
                      ticket={filteredTicket}
                    />
                  );
                })}
            </div>
          </div>
        ))}
    </section>
  );
}
