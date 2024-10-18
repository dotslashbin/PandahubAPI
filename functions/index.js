const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp();
const db = admin.firestore();

// HTTP function to get a document by its ID
exports.getDocumentById = functions.https.onRequest(async (req, res) => {
  // Extract the document ID from the query parameters
  const docId = req.query.id;

  if (!docId) {
    return res.status(400).send('Missing document ID');
  }

  try {
    // Get the document from Firestore
    const docRef = db.collection('testcollection').doc(docId);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).send('Document not found');
    }

    // Send the document data as a response
    return res.status(200).json(doc.data());
  } catch (error) {
    console.error('Error reading document:', error);
    return res.status(500).send('Internal Server Error');
  }
});
