import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
// import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/U.S._Air_Force_at_Pittsburgh_air_show.jpg/1280px-U.S._Air_Force_at_Pittsburgh_air_show.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    // <Layout>
    // <MeetupList meetups={loadedMeetups} />
    <MeetupList meetups={props.meetups} />
    // </Layout>
  );
}

export async function getStaticProps() {
  // getStaticProps(정적 생성 방식)는 Next.js가 우리를 위해 실행하는 특수 함수입니다.
  // fetch data from an API
  // const response = await fetch('https://api.example.com/data');
  // const data = await response.json();

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
