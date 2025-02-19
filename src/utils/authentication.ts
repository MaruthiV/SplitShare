import firebase from "./firebase_init";

const signInWithGoogle = async () => {
  const userInfo = await firebase
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider());

  if (userInfo.additionalUserInfo?.isNewUser) {
    // const db = getFirestore(firebase);
    // setDoc(doc(db, "users", userInfo.user?.uid), {
    //   email: userInfo.user?.email, 
    //   stripe_leader_id: "",
    // })
  }    
};
  
const signOutWithGoogle = async () => {
  await firebase.auth().signOut();
};

export {signInWithGoogle, signOutWithGoogle};