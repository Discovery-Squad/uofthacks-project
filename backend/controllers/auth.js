import { 
    getAuth,
    onAuthStateChanged, 
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    connectAuthEmulator
  } from 'firebase/auth';

  // Login using email/password
 export const loginUser = async (fb, req, res) => {
    const auth = getAuth(fb);
    // Don't use emulator - emulator bad! :(
    // await connectAuthEmulator(auth, "http://localhost:9099");
    
    try {
        const user = await signInWithEmailAndPassword(auth, req.body.email, req.body.password);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json(error);
    }
  }

// Create a new user
export const createUser = async (fb, req, res) => {
    const auth = getAuth(fb);

    try {
      const user = await createUserWithEmailAndPassword(auth, req.body.email, req.body.password);
      res.status(201).json(user);
    }
    catch (error) {
      res.status(400).json(error);
    } 
  }
  
// TODO: Implement later, not necessary right now  
// // Listen to whether or not the user is logged in
// export const userLoginState = async () => {
//     onAuthStateChanged(auth, user => {
//       if (user) {
//         console.log(user)
//       }
//       else {
//         console.log("auth expired");
//       }
//     })
//   }
  
// // Log out
// export const logout = async () => {
//     await signOut(auth);
// }
