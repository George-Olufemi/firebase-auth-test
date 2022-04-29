import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}





























// import { 
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
//     signInWithEmailAndPassword,
//     } from "firebase/auth";
// import { auth } from "./firebase-config.js";

// function App() {
//         const [registerEmail, setRegisterEmail] = React.useState("");
//         const [registerPassword, setRegisterPassword] = React.useState("");
//         const [loginEmail, setLoginEmail] = React.useState("");
//         const [loginPassword, setLoginPassword] = React.useState("");
//         const [user, setUser] = React.useState({});
//         onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser)
//         })

//         const register = async () => {
//             try {
//                     const user = await createUserWithEmailAndPassword(
//                     auth, 
//                     registerEmail, 
//                     registerPassword
//                     );
//                     console.log(user);
//             } catch (error) {
//                 console.log(error.message);
//             }
//         }
//         const login = async () => {
//             try {
//                 const user = await signInWithEmailAndPassword(
//                 auth, 
//                 loginEmail, 
//                 loginPassword
//                 );
//                 console.log(user);
//         } catch (error) {
//             console.log(error.message);
//         }
//         }
//         const logout = async () => {
//             await signOut(auth);
//         }
//         return(
//             <div className="container">
//             <center>
//             <h1>Register User</h1>
//             <label for="email">Input Email:</label><br />        
//             <input 
//             type="text" 
//             name="email" 
//             placeholder="input valid email" 
//             onChange={(event) => {setRegisterEmail(event.target.value);
//             }} />
//             <br /><br /> 
            
//             <label for="password" type="password">Input Password:</label><br />
//             <input 
//             type="password" 
//             name="password" 
//             placeholder="input password"  
//             onChange={(event) => {setRegisterPassword(event.target.value);
//             }}></input><br /><br />
//             <button onClick={ register }>Create User</button><br /><br />

//             <h1>Login</h1>
//             <label for="email">Input Email:</label><br />        
//             <input 
//             type="text" 
//             name="email" 
//             placeholder="input valid email"  
//             onChange={(event) => {setLoginEmail(event.target.value);
//             }}></input><br /><br /> 
//             <label for="password" type="password">Input Password:</label><br />

//             <input 
//             type="password" 
//             name="password" 
//             placeholder="input password"  
//             onChange={(event) => {setLoginPassword(event.target.value);
//             }}></input><br /><br />
//             <button onClick={ login }>Login</button>

//             <h1>User Logged In: { user?.email }</h1>
//             <button onClick={ logout }>Log Out</button>
//             </center>
//             </div>
//         );
//     }


export default App;