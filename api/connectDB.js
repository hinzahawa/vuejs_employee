const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("warehouse").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// var MongoClient = require("mongodb").MongoClient;
// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/warehouse", function (err, db) {
//   if (err) throw err;
//   console.log("Connected DB successfully");
//   //Write databse Insert/Update/Query code here..
// });
