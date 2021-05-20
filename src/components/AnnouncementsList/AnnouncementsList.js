import React from 'react';
import { Announcement } from '../Announcement/';

import './AnnouncementList.scss';

export const AnnouncementsList = ({ announcements, setShowDetails, setAnnouncementId, typeList }) => {
  return (
    <div className={`announcements announcements--${typeList}`}>
      {announcements.map(announcement => (
        <Announcement
          key={announcement.id}
          announcement={announcement}
          setShowDetails={setShowDetails}
          setAnnouncementId={setAnnouncementId}
        />
      ))}
    </div>
  );
}
