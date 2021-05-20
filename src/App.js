import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

import { Header } from './components/Header/';
import { AnnouncementsList } from './components/AnnouncementsList/';
import NewAnnouncementForm from './components/NewAnnouncementForm/NewAnnouncementForm';
import { AnnouncementDetails } from './components/AnnouncementDetails/';

function App() {
  const [announcements, setAnnouncements] = useState([
    {
      title: 'Announcement #1',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat excepturi nisi facilis. Ab veniam maxime tempora. Dolore esse quidem quam nisi consequatur magni quia aliquam, dolores quod? Saepe, exercitationem unde?',
      dateAdded: new Date(),
      id: uuidv4(),
    },
    {
      title: 'Announcement #2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, unde? ',
      dateAdded: new Date(),
      id: uuidv4(),
    },
  ]);
  const [query, setQuery] = useState('');
  const [isNewAnnouncement, seIsNewAnnouncement] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [announcementId, setAnnouncementId] = useState('');

  const filterAnnouncements = (event) => {
    setQuery(event.target.value);
  }

  const filteredAnnouncements = announcements
    .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));

  
  const render = () => {
    if (showDetails) {
      return (
        <AnnouncementDetails
          announcementId={announcementId}
          setShowDetails={setShowDetails}
          setAnnouncements={setAnnouncements}
          announcements={announcements}
          setAnnouncementId={setAnnouncementId}
        />
      )
    } else {
      return (
        <>
          {isNewAnnouncement
            ? <NewAnnouncementForm
                setAnnouncements={setAnnouncements}
                seIsNewAnnouncement={seIsNewAnnouncement}
              />
            : <>
                <div className="app__options">
                  <input
                    className="input app__serch"
                    type="text"
                    value={query}
                    onChange={filterAnnouncements}
                    placeholder="Search announcements"
                  />
                  <button
                    className="button button--large"
                    onClick={() => seIsNewAnnouncement(true)}
                  >
                    Add Announcement
                  </button>
                </div>
                <AnnouncementsList
                  announcements={filteredAnnouncements}
                  setShowDetails={setShowDetails}
                  setAnnouncementId={setAnnouncementId}
                  typeList="four"
                />
              </>
          }
        </>
      );
    }
  }

  return (
    <>
      <Header />
      <div className="app">
        {render()}
      </div>
    </>
  );
}

export default App;
