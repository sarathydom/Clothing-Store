import React, { Component } from 'react'
import FormInput from '../FormInput/Form-Input.Component';
import CustomButton from '../Custom-button/Custom-button.Component'
import './Sign-in.styles.scss'
export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = (event) => {
        event.preventSubmit();
        this.setState({
            email:'',
            password:''
        })
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
                        type="text" 
                        name="password" 
                        lable="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        id="password" 
                        required={true}
                    />
                     <CustomButton 
                     type="submit" 
                     >Sign In</CustomButton>
                 </form>
            </div>
        )
    }
}
