const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://gaurav_gunjal14:SOWlp1C7FV8FraxK@coding.denw2w0.mongodb.net/';
const client = new MongoClient(uri);

const database = 'web_learning';

async function main() {

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(database);
    const collection = db.collection('users');


    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());