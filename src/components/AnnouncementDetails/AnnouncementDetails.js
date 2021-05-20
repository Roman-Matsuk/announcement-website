import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { AnnouncementsList } from '../AnnouncementsList/';

import './AnnouncementDetails.scss';

export const AnnouncementDetails = ({
  announcementId,
  setShowDetails,
  setAnnouncements,
  announcements,
  setAnnouncementId
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setDescription] = useState('');
  const [currentAnnouncement, setCurrentAnnouncement] = useState({});
  const [similarAnnouncements, setSimilarAnnouncements] = useState([]);

  useEffect(() => {
    const announcement = announcements.find(ann => ann.id === announcementId)
    const similar = announcements.filter(ann => (
      (announcement.title.includes(ann.title) || announcement.description.includes(ann.description))
      && ann.id !== announcementId
    ));
    
    if (similar.length > 0) {
      similar.length = 3;
    }

    setCurrentAnnouncement(announcement);
    setNewTitle(announcement.title);
    setDescription(announcement.description);

    setSimilarAnnouncements(similar);
  }, [announcementId, announcements]);

  const handleAnnouncementChange = () => {
    setAnnouncements(prev => {
      return  prev.map(ann => {
        if (ann.id === announcementId) {
          ann.title = newTitle;
          ann.description = newDescription;
        }

        return ann;
      });
    });
    setIsEdit(false);
  }

  const handleDelete = () => {
    setAnnouncements(prev => prev.filter(announcement => announcement.id !== announcementId));
    setShowDetails(false);
  }

  const render = () => {
    if (isEdit) {
      return (
        <div className="details">
          <div className="details__header">
            <input
              type="text"
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
              className="details__title input"
            />
            <div className="details__buttons details__buttons--edit">
            <button
              onClick={handleAnnouncementChange}
              className = "button"
            >
              Save
            </button>
            <button
              onClick={() => setIsEdit(false)}
              className = "button"
            >
              Cancel
            </button>
          </div>
          </div>
          <p className="details__date">
            {`Added ${moment(currentAnnouncement.dateAdded, "YYYYMMDD").fromNow()}`}
          </p>
          <textarea
            value={newDescription}
            onChange={(event) => setDescription(event.target.value)}
            className="details__description textarea"
          />
        </div>
      );
    }

    return (
      <div className="details">
        <div className="details__header">
          <h2 className="details__title">{currentAnnouncement.title}</h2>
          <div className="details__buttons">
            <button
              className = "button"
              onClick={() => {
                setShowDetails(false);
              }}
            >
              Back
            </button>
            <button
              onClick={() => setIsEdit(true)}
              className = "button"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className = "button"
            >
              Delete
            </button>
          </div>
        </div>
        <p className="details__date">
          {`Added ${moment(currentAnnouncement.dateAdded, "YYYYMMDD").fromNow()}`}
        </p>
        <p className="details__description">{currentAnnouncement.description}</p>
      </div>
    )
  }

  return (
    <>
      {render()}
      {(similarAnnouncements.length > 0)
        && <h3 className="details__similar">Similar announcements</h3>
      }
      <AnnouncementsList
        announcements={similarAnnouncements}
        setShowDetails={setShowDetails}
        setAnnouncementId={setAnnouncementId}
        typeList="three"
      />
    </>
  );
};
