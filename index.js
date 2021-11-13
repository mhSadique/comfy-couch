const express = require('express');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;
const { MongoClient } = require('mongodb');
const uri = "mongodb://sadique:cd-M5-gvCFc64S5@cluster0-shard-00-00.0gjnb.mongodb.net:27017,cluster0-shard-00-01.0gjnb.mongodb.net:27017,cluster0-shard-00-02.0gjnb.mongodb.net:27017/test?ssl=true&replicaSet=atlas-6k9h56-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await mongoClient.connect();
        const database = mongoClient.db('comfy_couch');
        const couchesCollection = database.collection('product_couch');
        const ordersCollection = database.collection('comfy_couch_orders');
        const usersCollection = database.collection('comfy_couch_users');

        // GET api (get all the couches)
        app.get('/couches', async (req, res) => {
            const cursor = couchesCollection.find({});
            const packages = await cursor.toArray();
            res.send(packages);
        })

        // POST api (save a single order from user)
        app.post('/save-order-details', async (req, res) => {
            const orderDetails = req.body;
            const result = await ordersCollection.insertOne(orderDetails);
            if (result.insertedId) {
                res.json('Order accepted');
            }
        })

        // GET API (get all couches found by email)
        app.get('/order-by-email/:email', async (req, res) => {
            const userEmail = req.params.email;
            const query = { email: userEmail };
            const cursor = ordersCollection.find(query);
            const ordersByEmail = await cursor.toArray();
            res.send(JSON.stringify(ordersByEmail));
            console.log(query);
        })

        // GET API (get a single couch found by id from all couches)
        app.get('/ordered-couch-by-id/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await couchesCollection.findOne(query);
            res.send(JSON.stringify(result));
        })

        // APPROVE pending order (FOR ADMIN)
        app.put('/approve-order/:id', async (req, res) => {
            const id = req.params.id;
            const changedStatus = req.body;
            console.log(changedStatus);
            const filter = { _id: ObjectId(id) };
            const updatedStatus = { $set: changedStatus };
            const result = await ordersCollection.updateOne(filter, updatedStatus);
            res.json(result);
        })

        // DELETE API (delete a single order by id)
        app.delete('/cancel-order/:id', async (req, res) => {
            const id = req.params.id;
            console.log('got your id : ', id);
            const query = { _id: ObjectId(id) };
            const result = await ordersCollection.deleteOne(query);
            console.log(result);
            if (result.deletedCount === 1) {
                res.send(JSON.stringify(result));
            }
        })

        // POST api (save a single user)
        app.post('/save-user-details', async (req, res) => {
            const userDetails = req.body;
            const result = await usersCollection.insertOne(orderDetails);
            if (result.insertedId) {
                res.json('Order accepted');
            }
        })

        // Upsert users white registering
        app.put('/save-user', async (req, res) => {
            const userDetails = req.body;
            const filter = { email: userDetails.email };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: userDetails.name,
                    email: userDetails.email,
                    role: 'user'
                },
            };
            const result = await usersCollection.updateOne(filter, updateDoc, options);
            res.json(result);
        })

        // Make admin
        app.put('/make-admin/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const updatedStatus = { $set: {role: 'admin'} };
            const result = await usersCollection.updateOne(filter, updatedStatus);
            res.json(result);
        })

        // get user by email to check if the user is admin or not
        app.get('/user-by-email/:email', async(req, res) => {
            const userEmail = req.params.email;
            const query = {email: userEmail};
            console.log(query);
            const cursor = usersCollection.find(query);
            const userByEmail = await cursor.toArray();
            console.log(userByEmail);
            res.send(JSON.stringify(userByEmail));
        })

        // Get all the orders
        app.get('/all-orders', async(req, res) => {
            const cursor = ordersCollection.find({});
            const packages = await cursor.toArray();
            res.send(packages);
        })


        // GET API (get all products)
        app.get('/all-products', async(req, res) => {
            const cursor = couchesCollection.find({});
            const couches = await cursor.toArray();
            res.send(couches);
        })

        // DELETE API (delete a single product by id)
        app.delete('/remove-product/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await couchesCollection.deleteOne(query);
            console.log(result);
            if (result.deletedCount === 1) {
                res.send(JSON.stringify(result));
            }
        })






        // test 
        app.get('/', async (req, res) => {
            res.send('success')
        })


    }
    finally {
        // await mongoClient.close();
    }
}

run().catch(console.dir);


app.listen(process.env.PORT || 5000);