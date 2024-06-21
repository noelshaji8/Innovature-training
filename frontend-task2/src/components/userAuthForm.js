import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../styles.css';
import { Link } from 'react-router-dom';
import { registerUser } from '../Api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/userSlice';
import { loginUser } from '../Api';


function UserAuthForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await registerUser({ "username": username, "password": password });
            // dispatch(login(username));
        } catch (error) {
            console.error('Registration error:', error);
            // Handle error (show message, etc.)
        }

    };

    const handleLogin = async () => {
        try {
            const userInfo = await loginUser({ "username": username, "password": password });
            console.log(userInfo)
            dispatch(login(userInfo.requiredUser));
            navigate('/display');

        } catch (error) {
            console.error('Login error:', error);
            // Handle error (show message, etc.)
        }

    };

    return (
        <div className='Login'>
            <Tabs.Root className="TabsRoot" defaultValue="tab1">

                <Tabs.List className="TabsList" aria-label="Manage your account">
                    <Tabs.Trigger className="TabsTrigger" value="tab1">
                        Sign Up
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab2">
                        Login
                    </Tabs.Trigger>
                </Tabs.List>

                {/* SIGNUP */}

                <Tabs.Content className="TabsContent" value="tab1">
                    <p className="Text">Enter your new username and password</p>
                    <fieldset className="Fieldset">
                        <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} className="Input" id="name" placeholder='Username' />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="Input" id="username" placeholder='Password' />
                    </fieldset>
                    <div className='Button' >
                        <button className="Button green" onClick={handleSignup}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} >Submit</Link></button>
                    </div>
                </Tabs.Content>

                {/* LOGIN */}

                <Tabs.Content className="TabsContent" value="tab2">
                    <p className="Text">Enter your login credentials here.</p>
                    <fieldset className="Fieldset">

                        <input className="Input" required value={username} onChange={(e) => setUsername(e.target.value)} id="currentPassword" placeholder='Username' type="text" />
                    </fieldset>
                    <fieldset className="Fieldset">

                        <input className="Input" required value={password} onChange={(e) => setPassword(e.target.value)} id="newPassword" placeholder='Password' type="password" />
                    </fieldset>

                    <div className='Button'>
                        <button className="Button green" onClick={handleLogin} ><Link style={{ color: 'inherit', textDecoration: 'inherit' }}>Proceed</Link></button>

                    </div>
                </Tabs.Content>

            </Tabs.Root>
        </div>
    );

}

export default UserAuthForm;