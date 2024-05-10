import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { getFirestore , addDoc , collection } from "firebase/firestore";
import { toast } from "react-toastify";




const firebaseConfig = {
  apiKey: "AIzaSyAcAFIDqhYcYJfLT37oA0cRt5dawYUwG94",
  authDomain: "netflix-clone-1c1cb.firebaseapp.com",
  projectId: "netflix-clone-1c1cb",
  storageBucket: "netflix-clone-1c1cb.appspot.com",
  messagingSenderId: "597347935782",
  appId: "1:597347935782:web:290e6d17081b2f70e428e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const db=getFirestore(app);

const Signup=async (name,email,password)=>{
    try {
      const res = await createUserWithEmailAndPassword(auth,email,password)  
       const user = res.user
       await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider: "local",
        email
       })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split("-").join(" "))
    }
}

const login =async (email,password)=>{

try {
     await   signInWithEmailAndPassword(auth,email,password)   
} catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split("-").join(" "))  
}
}

const logout = ()=>{
        signOut(auth)
    };

    export {auth,db,login,Signup,logout} ;