const mongoDB = require('mongodb').MongoClient;
const url = 'mongodb+srv://Node5DatabaseLesson:Romachamp10@cluster0.vvxdepz.mongodb.net/?retryWrites=true&w=majority';

class DbService {
    async saveData(collection, data) {
        const connection = await mongoDB.connect(url);
        const db = connection.db('CryptoProject');
        const newData = {mail: data};
        await db.collection(collection).insertOne(newData, function (error, result) {
            if (error) {
                throw error;
            }
        });
    }

    async isDataExists(data, collection) {
        const connection = await mongoDB.connect(url);
        const db = connection.db('CryptoProject');
        const findData = {mail: data};
        const result = await db.collection(collection).find(findData).toArray();
        return result.length >= 1;
    }

    async isUserExists(data) {
        const connection = await mongoDB.connect(url);
        const db = connection.db('CryptoProject');
        const findData = {
            mail: data
        }
        const result = await db.collection('Users').find(findData).toArray();
        return result.length >= 1;
    }

    async getAllData(collection) {
        const connection = await mongoDB.connect(url);
        const db = connection.db('CryptoProject');
        const result = await db.collection(collection).find().toArray();
        let arr = [];
        for (let i = 0; i < result.length; i++) {
            arr.push(result[i].mail);
        }
        return arr;
    }

    async deleteData(data, collection) {
        const connection = await mongoDB.connect(url);
        const db = connection.db('CryptoProject');
        const findData = {mail: data};
        const result = await db.collection(collection).deleteOne(findData, function (err, obj) {
            if (err) {
                throw err;
            }
        });
    }

    async getLastData(collection) {
        const connection = await mongoDB.connect(url);

        const db = connection.db('CryptoProject');

        let record = await db.collection(collection).find({}).sort({_id: -1}).limit(1);

        let returnData;

        await record.forEach(element => {
            returnData = element;
        })

        return returnData;
    }

}

module.exports = new DbService();