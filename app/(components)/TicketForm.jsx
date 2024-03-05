'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const TicketForm = ({ ticketToEdit }) => {
  const router = useRouter();

  const defaultTicketData = {
    title: '',
    description: '',
    category: 'Hardware Problem',
    priority: 1,
    progress: 0,
    status: 'Not Started',
  };

  const [formData, setformData] = useState(ticketToEdit ?? defaultTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setformData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleTicketSubmit = async (e) => {
    e.preventDefault();

    if (ticketToEdit) {
      const res = await fetch(`/api/Tickets/${ticketToEdit._id}`, {
        method: 'PUT',
        body: JSON.stringify({ formData }),
        'content-type': 'application/json',
      });

      if (!res.ok) {
        throw new Error('Failed to Update Ticket');
      }
    } else {
      const res = await fetch('/api/Tickets', {
        method: 'POST',
        body: JSON.stringify({ formData }),
        'content-type': 'application/json',
      });

      if (!res.ok) {
        throw new Error('Failed to Create Ticket');
      }
    }

    router.push('/');
    router.refresh();
  };
  return (
    <div className='flex justify-center w-screen'>
      <form
        action=''
        method='post'
        className='flex flex-col gap-5 md:w-1/2'
        onSubmit={handleTicketSubmit}
      >
        <h3>{ticketToEdit ? 'Edit' : 'Create'} Your Ticket</h3>

        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          id='title'
          value={formData.title}
          required={true}
          onChange={handleChange}
        />

        <label htmlFor='description'>Description</label>
        <textarea
          rows={5}
          name='description'
          id='description'
          value={formData.description}
          required={true}
          onChange={handleChange}
        />

        <label htmlFor='category'>Category</label>
        <select
          name='category'
          id='category'
          value={formData.category}
          onChange={handleChange}
        >
          <option value='Hardware Problem'>Hardware Problem</option>
          <option value='Software Problem'>Software Problem</option>
          <option value='Project'>Project</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            type='radio'
            name='priority'
            id='priority-1'
            value={1}
            onChange={handleChange}
            checked={formData.priority == 1}
          />
          <label htmlFor='priority-1'>1</label>

          <input
            type='radio'
            name='priority'
            id='priority-2'
            value={2}
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <label htmlFor='priority-2'>2</label>

          <input
            type='radio'
            name='priority'
            id='priority-3'
            value={3}
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <label htmlFor='priority-3'>3</label>

          <input
            type='radio'
            name='priority'
            id='priority-4'
            value={4}
            onChange={handleChange}
            checked={formData.priority == 4}
          />
          <label htmlFor='priority-4'>4</label>

          <input
            type='radio'
            name='priority'
            id='priority-5'
            value={5}
            onChange={handleChange}
            checked={formData.priority == 5}
          />
          <label htmlFor='priority-5'>5</label>
        </div>

        <div>
          <label htmlFor='progress'>Progress</label>
          <input
            type='range'
            name='progress'
            id='progress'
            value={formData.progress}
            min={0}
            max={100}
            onChange={handleChange}
            className='block w-full'
          />
          <p className='text-right font-bold text-amber-400'>{formData.progress}</p>
        </div>

        <label htmlFor='status'>Status</label>
        <select name='status' id='status' value={formData.status} onChange={handleChange}>
          <option value='not started'>Not Started</option>
          <option value='started'>Started</option>
          <option value='done'>Done</option>
        </select>
        <button type='submit' className='btn'>
          {ticketToEdit ? 'Edit' : 'Create'} Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
