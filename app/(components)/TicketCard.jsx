import { formatDate } from '../(utils)/utils';
import {
  DeleteBlock,
  PriorityDisplay,
  ProgressBar,
  StatusDisplay,
} from './index';
import Link from 'next/link';

const TicketCard = ({ ticket }) => {
  const { title, description, priority, progress, status, createdAt } = ticket;

  return (
    <article className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3'>
      <Link href={`/TicketPage/${ticket._id}`}>
        <div className='flex mb-3'>
          <PriorityDisplay priority={priority} />
          <div className='ml-auto'>
            <DeleteBlock id={ticket._id} />
          </div>
        </div>

        <h4>{title}</h4>
        <hr className='border-0 bg-page mb-2 h-px mt-px' />
        <p className='whitespace-pre-wrap'>{description}</p>

        <div className='flex-grow'></div>

        <div className='flex mt-2'>
          <div className='flex flex-col'>
            <p className='my-1'>{formatDate(createdAt)}</p>
            <ProgressBar progress={progress} />
          </div>

          <div className='flex items-end ml-auto'>
            <StatusDisplay status={status} />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default TicketCard;
