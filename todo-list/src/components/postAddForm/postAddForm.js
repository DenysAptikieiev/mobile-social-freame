import React from 'react';

import './postAddForm.sass';


const PostAddForm = () => {
    return (
        <form className="bottom-panel">
            <input
                type="text"
                placeholder="Add new Nodes"
                className="form-control new-post-label"
            />        
            <div className="btn-group post-status-filter">
                <button type="submit" className="btn btn-outline-secondary">Add</button>
            </div>
    
        </form>
    )
}

export default PostAddForm;