// import "./Signin.css";
// export default function signIn({setUser}){

//     function handleSubmit(event){
//         event.preventDefault()
//     fetch("")
//     .then(response => response.json())
//     .then(signUps=>setUser(signUps.find(account => {
//         return(
//         account.username === event.target.username.value
//         && account.password === event.target.password.value
//         )
       
       
// }))

// )

//     }
//     return(
//         <div id="signInSection">
        
//         <form id="formSignInInfo" onSubmit={handleSubmit}>
        
//       <h1 id="signInh1"> SIGN IN</h1>
//       <input
//         id="usernameSignIn"
//         type="text"
//         name="username"
       
//         placeholder="Username"
//       />
//       <input
//       id="passwordSignIn"
//         type="password"
//         name="password"
     
//         placeholder="Password"
//       />
//       <button id="signUpBtn" >SIGN IN</button>
//       </form>
//     </div>
//     )

// }
import './Signin.css'
import { Link } from "react-router-dom"
export default function SignIn(){
    return(
        <div className='signinSection'>
            <form id="formInfo" >

        <h1 id="signinh1"> SIGN IN</h1>
        <input
           id="usernameSignin"
           type="email"
           name="email"
        //    value={formData.username}
        //    onChange={handleInputChange}
           placeholder="Email Address"
         />
         <input
           id="passwordSignin"
          type="password"
           name="password"
        //    value={formData.password}
        //    onChange={handleInputChange}
          placeholder="Password"
        />
        <button id="signInBtn">Sign In</button>

       <p id="signupP">Doesn't have an account?</p>
        <Link id="linkSignUp" to="/signup">
          <h3 id="signupLink">SIGN UP</h3>
       </Link>
        </form>
        </div>
    )
}