import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData: Meetup) {
    console.log(enteredMeetupData);
    // const response = await fetch('https://some-domain.com/abc');
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
