import {
  DeleteBlock,
  PriorityDisplay,
  ProgressBar,
  StatusDisplay,
} from './index';

const TicketCard = ({ ticket }) => {
  const {
    title,
    description,
    category,
    priority,
    progress,
    status,
    createdAt,
  } = ticket;

  return (
    <article className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3'>
      <div className='flex mb-3'>
        <PriorityDisplay />
        <div className='ml-auto'>
          <DeleteBlock />
        </div>
      </div>

      <h4>{title}</h4>
      <hr className='border-0 bg-page mb-2 h-px' />
      <p className='whitespace-pre-wrap'>{description}</p>

      <div className='flex-grow'></div>

      <div className='flex mt-2'>
        <div className='flex flex-col'>
          <p className='my-1'>08/02/2024 12:30PM</p>
          <ProgressBar progress={progress} />
        </div>

        <div className='flex items-end ml-auto'>
          <StatusDisplay status={status} />
        </div>
      </div>
    </article>
  );
};

export default TicketCard;
