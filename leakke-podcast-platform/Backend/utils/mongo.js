const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_URI}/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const cols = {};

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    await client.connect();
    const database = await client.db('LeakeberhanPodcastWebsite');

    const bio = database.collection('bio');
    const credentials = database.collection('credentials');
    const lettersGallery = database.collection('lettersGallery');
    const users = database.collection('users');
    const work = database.collection('work');

    cols.bio = bio;
    cols.credentials = credentials;
    cols.lettersGallery = lettersGallery;
    cols.users = users;
    cols.work = work;

    await client.db("admin").command({ ping: 1 });

    console.log("Mongo is connected!");
  } finally {
    await client.close();
  }
}
run();

module.exports = cols;
