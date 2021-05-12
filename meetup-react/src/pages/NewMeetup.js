import React from 'react'
import { useHistory } from 'react-router-dom'

import NewMeetupFrom from '../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {

    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch('https://react-getting-started-1c0bd-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        ).then(() => {
            history.replace('/')
        })

    }


    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupFrom onAddMeetup={addMeetupHandler}/>
    </section>
    )
}

export default NewMeetupPage;