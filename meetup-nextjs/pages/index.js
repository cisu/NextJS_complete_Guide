import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City3',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export default function getServerSideProps(context) {
  
//   const req = context.req;
//   const res = context.res;
  
  
//   // fetch data from an API
//   return {
//     props: DUMMY_MEETUPS
//   }
// }

export async function getStaticProps() {
  // fetch data fromm an API 
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // wait 10s before revalidate data from server
    revalidate: 10
  }
}

export default HomePage;
