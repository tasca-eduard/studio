import React from "react"
import FormControl from "./FormControl"

const UserForm = (props) => {
    return (
        <div className="user-form">
            <h2>{props.title}</h2>
            <form id={props.isRegister ? 'register-user' : 'update-user'}>
                <FormControl 
                    type="text" 
                    id={`${props.isRegister ? 'reg' : 'up'}-username`}
                    name={`${props.isRegister ? 'reg' : 'up'}Username`}
                    value={props.isRegister ? '' : 'marissa200'}
                    labelText="Username" 
                />
                <FormControl 
                    type="email" 
                    id={`${props.isRegister ? 'reg' : 'up'}-email`}
                    name={`${props.isRegister ? 'reg' : 'up'}Email`}
                    value={props.isRegister ? '' : 'marissa@example.com'}
                    labelText="Email" 
                />
                {
                    props.isRegister &&
                    <React.Fragment>
                        <FormControl 
                            type="password" 
                            id={`${props.isRegister ? 'reg' : 'up'}-password`}
                            name={`${props.isRegister ? 'reg' : 'up'}Password`}
                            labelText="Password" 
                        />
                        <FormControl 
                            type="password" 
                            id={`${props.isRegister ? 'reg' : 'up'}-password-confirm`}
                            name={`${props.isRegister ? 'reg' : 'up'}PasswordConfirm`}
                            labelText="Confirm Password" 
                        />
                    </React.Fragment>
                }
                <FormControl 
                    type="textarea" 
                    id={`${props.isRegister ? 'reg' : 'up'}-motto`}
                    name={`${props.isRegister ? 'reg' : 'up'}Motto`}
                    value={props.isRegister ? '' : 'The world is a playground!'}
                    labelText="Motto" 
                />
                <FormControl 
                    type="radio" 
                    firstId={`${props.isRegister ? 'reg' : 'up'}-ads-first`}
                    secondId={`${props.isRegister ? 'reg' : 'up'}-ads-second`}
                    name={`${props.isRegister ? 'reg' : 'up'}Ads`}
                    labelText="User personalized ads" 
                    firstValue="Yes"
                    secondValue="No"
                    firstChecked={props.isRegister ? false : true}
                />
                <FormControl 
                    type="submit" 
                    id={`${props.isRegister ? 'reg' : 'up'}-submit`}
                    name={`${props.isRegister ? 'reg' : 'up'}Submit`}
                    labelText={`${props.isRegister ? 'Register' : 'Update'}`}
                />
            </form>
        </div>
    )
}

export default UserForm
