'use client';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import { Ticket } from '../page';

const TicketForm = ({ ticket }: { ticket: any }) => {
  let EDITMODE = ticket._id === 'new' ? false : true;

  const router = useRouter();
  const startingTicket = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'Not started',
    category: 'Hardware Problems',
  };
  if (EDITMODE) {
    startingTicket['title'] = ticket.title;
    startingTicket['description'] = ticket.description;
    startingTicket['priority'] = ticket.priority;
    startingTicket['progress'] = ticket.progress;
    startingTicket['status'] = ticket.status;
    startingTicket['category'] = ticket.category;
  }
  const [formData, setFormData] = useState(startingTicket);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: any) => {
   e.preventDefault();
   if(EDITMODE){
      const res = await fetch(`/api/tickets/${ticket._id}`, {
         method: 'PUT',
         body: JSON.stringify(formData),
         headers: {
           'Content-Type': 'application/json',
         },
       });
       if (!res.ok) {
         throw new Error('Failed to create a Ticket');
       }
   }else{
      const res = await fetch('/api/tickets', {
         method: 'POST',
         body: JSON.stringify(formData),
         headers: {
           'Content-Type': 'application/json',
         },
       });
       if (!res.ok) {
         throw new Error('Failed to create a Ticket');
       }
   }
  
   
   
    router.push('/');
    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col  w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? 'Update your ticket' : 'Create your Ticket'}</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          value={formData.title}
          required
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
          required
          rows={5}
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value={'Hardware problems'}>Hardware problems</option>
          <option value={'Software problems'}>Software problems</option>
          <option value={'Project'}>Project</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />

          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          id="progress"
          name="progress"
          type="range"
          min={0}
          max={100}
          onChange={handleChange}
          value={formData.progress}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value={'Not started'}>Not started</option>
          <option value={'Started'}>Started</option>
          <option value={'Done'}>Done</option>
        </select>
        <input
          type="submit"
          className="bg-blue-400"
          value={`${EDITMODE ? 'Update Ticket' : 'Create Ticket'} `}
        />
      </form>
    </div>
  );
};

export default TicketForm;
