
import React, { Component } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../styles.css';

class UserAuthForm extends Component {
    render() {
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
                    <Tabs.Content className="TabsContent" value="tab1">
                        <p className="Text">Enter your new username and password</p>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="name">
                                Username
                            </label>
                            <input className="Input" id="name" placeholder='Enter' />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="username">
                                Password
                            </label>
                            <input className="Input" id="username" placeholder='Enter' />
                        </fieldset>
                        <div className='Button' >
                            <button className="Button green">Submit</button>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content className="TabsContent" value="tab2">
                        <p className="Text">Enter your login credentials here.</p>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="currentPassword">
                                Username
                            </label>
                            <input className="Input" id="currentPassword" placeholder='Enter' type="password" />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="newPassword">
                                Password
                            </label>
                            <input className="Input" id="newPassword" placeholder='Enter' type="password" />
                        </fieldset>

                        <div className='Button'>
                            <button className="Button green">Proceed</button>
                        </div>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        );
    }
}

export default UserAuthForm;