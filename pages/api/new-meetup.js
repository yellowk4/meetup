import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;

    let client;

    try {
      client = await MongoClient.connect(
        'mongodb+srv://admin:5ZMFz9r8zTvoJEKs@cluster0.d5sec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        { useNewUrlParser: true, serverSelectionTimeoutMS: 30000 } // 30 seconds timeout
      );
      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);
      console.log('Insertion result:', result);

      res.status(201).json({ message: 'Meetup inserted!' });
    } catch (error) {
      console.error('Error connecting to MongoDB or inserting data:', error);
      res.status(500).json({ message: 'Failed to insert meetup' });
    } finally {
      if (client) {
        client.close();
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default handler;
