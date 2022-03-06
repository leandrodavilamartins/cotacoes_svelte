				const firebaseConfig = {
						apiKey: process.env.APIKEY,
						authDomain: process.env.AUTHDOMAIN,
						databaseURL: process.env.DATABASEURL,
						projectId: process.env.PROJECTID,
						storageBucket: process.env.STORAGEBUCKET,
						messagingSenderId: process.env.MESSAGINGSENDERID,
						appId: process.env.APPID
					};

					firebase.initializeApp(firebaseConfig);
					const db = firebase.firestore();
					const auth = firebase.auth();