/* eslint-disable max-len */
const functions = require("firebase-functions");
const SpotifyWebApi = require("spotify-web-api-node");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.helloWorldCallable = functions.https.onCall((data, context) => {
  return {
    res: "Hello there!",
  };
});

// createFromSpotify
// Inputs: a spotify playlist ID
// Outputs: success/failure for building playlist + giving access

exports.createFromSpotify = functions.https.onCall((data, context) => {
  functions.logger.info("Hello logs! We are doing some shit");
  console.log("New test");
  // const uid = context.auth.uid;
  const db = admin.firestore();
  let g = "";
  // temp using my user id for debug #TODO: Remove this
  db.collection("users").doc("5fiSioB9LSQ1Atfgz0pV3qUIdEw2").get().then((snapshot) => {
    if (!snapshot.exists) {
      console.log("No user found...");
      return {res: "error"};
    }
    functions.logger.info("Use data:", snapshot.data());
    console.log("User id:", "5fiSioB9LSQ1Atfgz0pV3qUIdEw2");
    g = snapshot.data().spotifytoken;
    const playlistId = data.playlistid;
    // const token = data.token;
    const spotifyApi = new SpotifyWebApi({
      clientid: "0eb3c952368042838a017a0430c530ef",
      clientSecret: "81b04cd42b9b4aec9e314e1bf180875e",
    });
    spotifyApi.setAccessToken(g);
    spotifyApi.getPlaylistTracks(playlistId, {fields: "items"})
        .then(
            (result) => {
              // const playlistdata = data.body;
              functions.logger.info("We got some nifty info:", result.body.items);
              console.log(result.body.items);
              const titlelist = [];
              const artistlist = [];
              const songlist = [];
              for (let i = 0; i < result.body.items.length; i++) {
                const {artists, name} = result.body.items[i].track;
                console.log(name);
                titlelist.push(name);
                const a = [];
                for (let j = 0; j < artists.length; j++) {
                  a.push(artists[j].name);
                }
                artistlist.push(a);
              }
              console.log(titlelist);
              console.log(artistlist);
              for (let i = 0; i < titlelist.length; i++) {
                songlist.push({title: titlelist[i], artists: artistlist[i]});
              }
              console.log(songlist);
              db.collection("playlists").doc().set(
                  {
                    name: "Test playlist",
                    songs: songlist,
                  }
              );
              return {
                titles: titlelist,
                artists: artistlist,
              };
            });
  })
      .catch((err) => console.log("Fuck!", err));
});
