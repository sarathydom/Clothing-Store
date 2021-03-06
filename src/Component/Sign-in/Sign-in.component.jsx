import React, { Component } from 'react';

import FormInput from '../FormInput/Form-Input.Component';
import CustomButton from '../Custom-button/Custom-button.Component'
import { auth,signInWithGoogle } from '../../firebase/firebase.utils'

import './Sign-in.styles.scss'
export default class SignIn extends Component {
    
        constructor(props){
            super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {password,email}=this.state;
        try{
            auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
        }catch(e){
            console.log(e)
        }
    }
    handleChange=(event)=>{
        const {value,name } = event.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div className='sign-in'>
                 <h2>I Already Have an account</h2>
                 <span>Sign in with your email and password </span>
                 <form onSubmit={this.handleSubmit}>
                     <FormInput 
                        type="email" 
                        name="email"
                        lable="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        id="email" 
                        required={true}
                    />
                     <FormInput 
                        type="password" 
                        name="password" 
                        lable="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        id="password" 
                        required={true}
                    />
                    <div className="buttons">
                    <CustomButton 
                     type="submit" 
                     >Sign In</CustomButton>
                     <CustomButton 
                     onClick={signInWithGoogle}
                     isGoogleSignIn
                     >Sign In with google</CustomButton>
                    </div>
                     
                     
                 </form>
            </div>
        )
    }
}
