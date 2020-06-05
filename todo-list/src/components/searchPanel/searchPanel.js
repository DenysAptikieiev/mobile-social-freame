import React from 'react';

import './searchPanel.sass';

const SearchPanel = () => {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Search of Notes"
        />
    )
}

export default SearchPanel;