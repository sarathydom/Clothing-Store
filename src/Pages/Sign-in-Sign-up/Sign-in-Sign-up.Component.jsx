import React from 'react'
import SignIn from '../../Component/Sign-in/Sign-in.component'
import SignUp from '../../Component/Sign-up/Sign-up.Component';
import './Sign-in-Sign-up.styles.scss'
const SignInSignUp = () => {
    return (
        <>
            <div className="sign-in-and-sign-ip">
                <SignIn/>
                <SignUp/>                
            </div>
        </>
    )
}
export default SignInSignUp;