import React, {Component} from 'react';

import './postListItem.sass';
import styled from 'styled-components';

const StyledBlockItem = styled.div`
    height: 200px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
`

export default class PostListItem extends Component {
    render() {

        const {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;

        let classNames = 'app-list-item';
        if (important) {
            classNames += ' important';
        }

        if(like) {
            classNames += ' like'
        }

        return(
            <StyledBlockItem className={classNames} onDoubleClick={onToggleLike}>
                <i className="fa fa-heart"></i>
                <span className="app-list-item-label" >
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm" onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </StyledBlockItem>
        )
    }
}