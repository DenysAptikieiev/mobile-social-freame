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
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        }
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }
    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }
    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {

        const {label} = this.props;
        const {important, like} = this.state;

        let classNames = 'app-list-item';
        if (important) {
            classNames += ' important';
        }

        if(like) {
            classNames += ' like'
        }

        return(
            <StyledBlockItem className={classNames}>
                <i className="fa fa-heart"></i>
                <span className="app-list-item-label" onDoubleClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm" onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </StyledBlockItem>
        )
    }
}