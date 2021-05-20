import React from 'react';

import './Announcement.scss';

export const Announcement = ({ announcement, setShowDetails, setAnnouncementId }) => {

  return (
    <div className="card card--parameters">
      <div className="card__body">
        <h3 className="card__title">
           {announcement.title}
        </h3>
        <button
          className="card__button button"
          onClick={() => {
            setAnnouncementId(announcement.id);
            setShowDetails(true);
          }}
        >
          See more
        </button>
      </div>
    </div>
  );
};
