import React, {Component} from 'react';
import { Button } from 'reactstrap';


import './postAddForm.sass';


export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.addPost(this.state.text);
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <form 
            className="bottom-panel"
            onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="Add new Nodes"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button type="submit" color="success">Add</Button>
            </form>
        )
    
    }
}
