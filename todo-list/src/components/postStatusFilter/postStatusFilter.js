import React from 'react';
import { Button } from 'reactstrap';
import './postStatusFilter.sass'

const PostStatusFilter = () => {
    return (
        <div className="btn-group post-status-filter">
            <Button color="info">All</Button>
            <Button color="success">Liked</Button>
        </div>
    )
}

export default PostStatusFilter;