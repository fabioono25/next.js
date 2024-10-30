// server - contains full privilege (theoretically a secure environment)

import { getApp, getApps, initializeApp, App, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// coding in Node.js environment:
const serviceKey = require("@/service_key.json");

let app: App;

// avoid double-initialization:
if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceKey),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };
