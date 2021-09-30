// we have to load the firsebase-admin in order to interact with our firebase project
import admin from "firebase-admin";

// to get ready to send an authentication request to firebase, we load the json
// we load the json string and convert yo an actual JSON object (instead of loading file)
// why? this is more secure than saving our creds in a JSON file in our project
const serviceAccount = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_DATABASE_PRIVATEKEY
);

// let's wrap all of our code that tries to talk to firebase in a try {}
try {
  admin.initializeApp(
    {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
    }
  );
} catch(err) {
  // if error happens...
  console.log("firebase err", err.stack);
}

export default admin.firestore();