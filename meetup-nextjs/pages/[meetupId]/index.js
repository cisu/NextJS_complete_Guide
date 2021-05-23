import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      title='A First Meetup !'
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg'
      address='Some address 5, 12345 Some City'
      description='This is a first meetup!'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  // .meetupId because that's the identifier i have i between the square brackets i pages/[meetupId]
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchenjpg',
        id: meetupId,
        title: 'A First Meetup',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
      },
    },
  };
}

export default MeetupDetails;
