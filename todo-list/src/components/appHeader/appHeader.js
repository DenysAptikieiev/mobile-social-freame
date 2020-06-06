import React from 'react';

import './appHeader.sass';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header">
            <h1>Notes List</h1>
            <h2>Notes: {allPosts}</h2>
            <h2>Liked: {liked}</h2>
        </div>
    )
}

export default AppHeader;