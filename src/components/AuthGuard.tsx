//this prevents people from accessing guarded pages
import { useRouter } from "next/router";
import firebase from "../utils/firebase_init";
import { useEffect } from "react"
import {signInWithGoogle} from "../utils/authentication"

export function AuthGuard({ children }: { children: JSX.Element }) {
    const user = firebase.auth().currentUser
    const router = useRouter()
  
    useEffect(() => {
        if (!user) {
            // redirect and prompt sign-in
            router.push("/comingsoon")
            .then(() => {
                // signInWithGoogle().catch((err)=>{console.log(err);});
              }
            )
            .catch((err) => {
              console.log(err);
            })
        }
    }, [])
  
    // if auth initialized with a valid user show protected page
    if (user) {
      return <>{children}</>
    }
  
    /* otherwise don't return anything, will do a redirect from useEffect */
    return null
  }