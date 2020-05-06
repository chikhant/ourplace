import React from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from "react-router-dom"
import axios from 'axios'


const Login = () => {
   let history = useHistory()

   //Todo: don't allow any
   const responseGoogle = (response: any) => {
      console.log(response)
      let res = response.profileObj
      console.log(res)
      signup(response)
   }

   //Todo: don't allow any
   const signup = (res: any) => {
      const googleResponse = {
         Name: res.profileObj.name,
         email: res.profileObj.email,
         token: res.googleId,
         Image: res.profileObj.imageUrl,
         ProviderId: 'Google'
      }

      //Todo: This needs to be a post to your backend
      //https://dzone.com/articles/login-with-google-using-reactjs
      axios.post('http://localhost:60200/Api/Login/SocialmediaData', googleResponse)
         .then((result) => {
            sessionStorage.setItem('userData', JSON.stringify(result))
            history.push('/home')
      })
   }

   return <>
    <div>Welcome to OurPlace, we demand cookie!</div>
      <GoogleLogin
         clientId='1050408339690-8reaqr88geta6al5hn4e6o7pn04ecq9q.apps.googleusercontent.com'
         buttonText='Login with Google'
         onSuccess={responseGoogle}
         onFailure={responseGoogle}
      />
    </>
}
export default Login