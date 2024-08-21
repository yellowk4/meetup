import MeetupDetail from '../../components/meetups/MeetupDetail';
import { GetStaticPropsContext } from 'next';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg"
      title="A First Meetup"
      address="Some address 5, 12345 Some City"
      description="This is a first meetup!"
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
    fallback: false, // false: 404 page, true: wait for data
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // fetch data for single meetup
  const meetupId = context.params?.meetupId as string;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg',
        id: meetupId,
        title: 'A First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup!',
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
