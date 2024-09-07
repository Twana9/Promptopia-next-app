// import mongoose from "mongoose";
// let isConnected = false;

// export const connectToDB = async () => {
//   mongoose.set("strictQuery", true);

//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     return;
//   }
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "share_prompt",
//     });
//     isConnected = true;
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//   }
// };

import mongoose from "mongoose";
let isConnected = false;

const retryInterval = 5000; // Retry every 5 seconds
const maxRetries = 5; // Maximum number of retries

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  let retries = 0;
  while (!isConnected && retries < maxRetries) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompt",
      });
      isConnected = true;
      console.log("MongoDB connected");
      break;
    } catch (error) {
      console.error(`Failed to connect to MongoDB: ${error}`);
      retries++;
      await new Promise((resolve) => setTimeout(resolve, retryInterval));
    }
  }

  if (!isConnected) {
    throw new Error("Failed to connect to MongoDB after multiple attempts");
  }
};
