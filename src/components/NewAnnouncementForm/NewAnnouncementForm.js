import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './NewAnnouncementForm.scss';

const NewAnnouncementForm = ({ setAnnouncements, seIsNewAnnouncement }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createAnnouncement = (event) => {
    event.preventDefault();
    const newAnnouncement = {
      id: uuidv4(),
      title,
      description,
      dateAdded: new Date(),
    };

    setAnnouncements(prev => [...prev, newAnnouncement]);
    setTitle('');
    setDescription('');
  }

  return (
    <form
      onSubmit={createAnnouncement}
      className="form"
    >
      <h2 className="form__title">New Announcement</h2>
      <div className="form__fields">
        <label htmlFor="title" className="form__label">
          Title
        </label>
        <input
          type="text"
          className="input form__input"
          id="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div className="form__fields">
        <label htmlFor="description" className="form__label">
          Description
        </label>
        <textarea
          className="form__text textarea"
          id="description"
          rows="3"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </div>
      <button
        type="button"
        className="button form__button"
        onClick={() => seIsNewAnnouncement(false)}
      >
        Back
      </button>
      <button
        className="button form__button"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}

export default NewAnnouncementForm;