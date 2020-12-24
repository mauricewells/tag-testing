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
              {user.dob && (
                <span className="user-profile__dob">
                  ({new Date(user.dob.date).getFullYear()})
                </span>
              )}
            </span>
            <span className="user-profile__location">
              {`${user.location.state}, ${user.location.country}`}
            </span>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className="user-profile__details">
        <div className="details-section">
          <span className="details-section__label">Phone</span>
          <span className="details-section__content">
            {user.phone}
          </span>
        </div>
        <div className="divider" />
        <div className="details-section">
          <span className="details-section__label">Email</span>
          <span className="details-section__content">
            {user.email}
          </span>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default UserProfile;
