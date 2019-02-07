import Rebase from "re-base";
import Firebase from "firebase";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDRK_BcMnkG4dRS8QKe7q6990HCPnY8Tmg",
  authDomain: "catch-of-the-day-jeff.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jeff.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
