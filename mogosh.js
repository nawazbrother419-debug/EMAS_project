import mongoose from "mongoose";


// console.log(collections);

// const collections = await mongoose.connection.db
//    .listCollections()
//    .toArray();



// console.log(collections);


// const names = collections.map(
//    item => item.name
// );

// console.log(names);

const collections = db.collections;

console.log(collections);