import * as React from 'react';

import { Accordion, AccordionSummary, AccordionDetails } from 'src/components';
import { Chevron as ChevronIcon } from '../icons';

import './user-profile.style.scss';

function UserProfile({ user }) {
  return (
    <Accordion className="user-profile">
      <AccordionSummary expandIcon={<ChevronIcon />}>
        <div className="user-profile__summary">
          <img
            className="user-profile__image"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <div className="user-profile__info">
            <span className="user-profile__name">
              {`${user.name.first} ${user.name.last}`}
            </span>
            <span className="user-profile__location">
              {`${user.location.state}, ${user.location.country}`}
            </span>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className="user-profile__details">
        <div className="user-profile__details-section">
          <span className="user-profile__section-label">Phone</span>
          <span className="user-profile__section-content">
            {user.phone}
          </span>
        </div>
        <div className="divider" />
        <div className="user-profile__details-section">
          <span className="user-profile__section-label">Email</span>
          <span className="user-profile__section-content">
            {user.email}
          </span>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default UserProfile;
