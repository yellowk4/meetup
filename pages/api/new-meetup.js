import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://admin:5ZMFz9r8zTvoJEKs@cluster0.d5sec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups'); // collection 이름
    const result = await meetupsCollection.insertOne(data); // data = { title, image, address, description }
    console.log(result);
    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
