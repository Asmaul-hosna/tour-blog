import React from 'react';
import'./Write.css';

const Write = () => {
    return (
        <div className='write'>
            <img className='writeImg'
            src="https://images.unsplash.com/photo-1596570630094-43ddbe073a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"/>
            <form className='writeForm'>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                    <i className="writeIcon far fa-plus"></i>
                        </label>
                    <input id='fileInput' type='file' style={{display:"none"}}/>
                    <input className='writeInput' placeholder='Title' type='text' autoFocus={true}/>
                    </div>
                    <div className='writeFormGroup'>
                        <textarea 
                        placeholder='Tell your story...' type='text' className='writeInput writeText'>

                        </textarea>
                    </div>
                    <button className='writeSubmit'>publish</button>
                    </form>
   
                </div>

         
     );   
};

export default Write;