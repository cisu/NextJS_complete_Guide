import React from 'react'

import NewMeetupFrom from '../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {

    function addMeetupHandler(meetupData) {

    }


    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupFrom onAddMeetup={addMeetupHandler}/>
    </section>
    )
}

export default NewMeetupPage;