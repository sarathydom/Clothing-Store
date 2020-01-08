import React from 'react'
 
import FormInput from '../FormInput/Form-Input.Component';
import CustomButton from '../Custom-button/Custom-button.Component';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

import './Sign-up.styles.scss'

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            displayName:'',
            email:'',
            password:'', 
            confirmPassword:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {
            email,
            password,
            displayName,
            confirmPassword
        } = this.state;
        if(password!==confirmPassword){
            alert("Password dont match")
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(e){
            console.log(e,'error occured')
        }
    }
    handleChange = event =>{
        let {name,value} = event.target;
        this.setState({
            [name] : value
        })
    }
    render(){
        const {
            email,
            password,
            displayName,
            confirmPassword
        } = this.state;
        
        return(<>
            <div className="sign-up">
                <h2 className="title">I Do not Have Account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                     <FormInput
                     type = "text"  
                     name = "displayName"
                     value={displayName} 
                     onChange = {this.handleChange}
                     lable = 'Display Name '
                     required
                     />
                     <FormInput
                     type = "email"  
                     name = "email"
                     value={email} 
                     onChange = {this.handleChange}
                     lable = 'Email '
                     required
                     />
                     <FormInput
                     type = "password"  
                     name = "password"
                     value={password} 
                     onChange = {this.handleChange}
                     lable = 'Password '
                     required
                     />
                     <FormInput
                     type = "password"  
                     name = "confirmPassword"
                     value={confirmPassword} 
                     onChange = {this.handleChange}
                     lable = 'Confirm Password'
                     required
                     />
                     <CustomButton type="submit"> SignUp</CustomButton>
                </form>
                </div>    
        </>)
    }
}
export default SignUp;