"use server";
import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

export async function signUp(params:SignUpParams){
    const{
        uid,
        name,
        email,
    }=params;

    try{
        const userRecord= await db.collection("users").doc(uid).get();
        if(userRecord.exists){
            return {
                success:false,
                message:"User already exists",
            };
        }
        await db.collection("users").doc(uid).set({
            name,
            email,
        });
        return {
            success: true,
            message: "Account created successfully. Please sign in.",
          };


    }
    catch(error:any){
       console.log("Error in signUp:",error);
       if(error.code==="auth/email-already-exists"){
        
        return {
            success:false,
            message:"Email already exists",
        };
    }
    else{
        return{
            success:false,
            message:"Something went wrong",
        }
    }

}
}

export async function setSessionCookies(idToke:string){
    const cookieStore= await cookies();
    const sessionCookie= await auth.createSessionCookie(idToke, {
        expiresIn: 60*60*24*5*1000,
    });
    cookieStore.set("session", sessionCookie, {
        maxAge: 60*60*24*5,
        httpOnly: true,
        secure: process.env.NODE_ENV==="production",
        path: "/",
        sameSite:"lax",
    });
}

export async function signIn(params:SignInParams){
    const {email, idToken}=params;
    try{
        const userRecord= await auth.getUserByEmail(email);
        if(!userRecord){
            return {
                success:false,
                message:"User not found",
            };
        }
        await setSessionCookies(idToken);
        return {
            success:true,
            message:"Sign in successful",
        };
    }
    catch(error:any){
        console.log("Error in signIn:",error);
        if(error.code==="auth/user-not-found"){
            return {
                success:false,
                message:"User not found",
            };
        }
        else{
            return{
                success:false,
                message:"Something went wrong",
            };
        }
    }



}