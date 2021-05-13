import React from 'react';

import NewMeetupFrom from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-b2b09-default-rtdb.firebaseio.com/meetups.json',
      {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
              'Content-Type': 'application/json'
          }
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupFrom onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
