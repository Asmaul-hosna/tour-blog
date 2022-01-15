import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Settings.css';

const Settings = () => {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className="settingsTitle">
                <span className='settingsTitleUpdate'>Update Your Account</span>
                <span className='settingsTitleDelete'>Delete Your Account</span>
                    </div> 
                    <form className='settingsForm'>
                        <label>Profile Picture</label>
                        <div className='settingsPP'>
                            <img src="https://images.unsplash.com/photo-1596570630094-43ddbe073a77?ixlib=rb-1.2.1&ixid=
            MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"/>
                            <label htmlFor='fileInput'>
                            <i className=" settingsPPIcon far fa-user"></i>
                            </label>
                            <input className='settingsPPInput' type="file" id="fileInput" style={{display:'none'}}/>
                            </div>
                            <label>Username</label>
                            <input type='text' name='name' placeholder='M.lisa'/>
                            <label>Email</label>
                            <input type='email' name='email' placeholder='M.lisa@gmail.com'/>
                            <label>Password</label>
                            <input type='password' name='password' placeholder='password'/>
                            <button className='settingsSubmitButton' type='submit'>Update</button>
                    </form>
            
            </div>
                <Sidebar/>

           
            
        </div>
    );
};

export default Settings;