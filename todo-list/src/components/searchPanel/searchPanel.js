import React, {Component} from 'react';

import './searchPanel.sass';

export default class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    onUpdateSearch(e) {
        const searchText = e.target.value;
        this.setState({searchText});
        this.props.onUpdateSearch(searchText);
    }
    render() {
        return(
            <input
                className="form-control search-input"
                type="text"
                placeholder="Search of Notes"
                onChange={this.onUpdateSearch}
            />
        )
    }
} 
