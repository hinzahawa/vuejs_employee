const { MongoClient, ObjectId } = require("mongodb");
var url = "mongodb://localhost:27017/";


const getData = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) {
        // throw err;
        console.log(err);
        return reject(err);
      }
      var dbo = db.db("warehouse");
      dbo
        .collection("employee")
        .find(
          {},
          {
            sort: { created_at: 1 },
            projection: { created_at: 0, updated_at: 0 },
          }
        )
        .toArray(function (err, res) {
          if (err) throw err;
          console.log("getData");
          db.close();
          console.log(res);
          return resolve(res);
        });
    });
  });
};

const insert = async (email, name) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) {
        // throw err;
        console.log(err);
        return reject(err);
      }
      var dbo = db.db("warehouse");
      var myobj = {
        name: name,
        email: email,
        created_at: Date.now(),
        updated_at: Date.now(),
      };
      dbo.collection("employee").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
        return resolve(res.result);
      });
    });
  });
};

const update = async (id, email, name) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) {
        // throw err;
        console.log(err);
        return reject(err);
      }
      var dbo = db.db("warehouse");
      let find = { _id: ObjectId(id) };
      dbo.collection("employee").updateOne(find, function (err, res) {
        if (err) throw err;
        console.log("update document");
        db.close();
        return resolve(res.result);
      });
    });
  });
};

const deleteData = async (id) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) {
        // throw err;
        console.log(err);
        return reject(err);
      }
      var dbo = db.db("warehouse");
      var myobj = {
        _id: ObjectId(id),
      };
      dbo.collection("employee").deleteOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document delete");
        db.close();
        return resolve(res.result);
      });
    });
  });
};

module.exports = {getData,insert,update,deleteData}