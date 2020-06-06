import React, {Component} from 'react';
import { Button } from 'reactstrap';
import './postStatusFilter.sass'

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
           this.buttons = [
               {name: 'all', label: 'All'},
               {name: 'like', label: 'Liked'}
           ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props
            const active = filter === name;
            const colorName = active ? 'info' : 'success'
            return (
                <Button 
                    key={name} 
                    type='button'
                    color={colorName}
                    onClick={() => onFilterSelect(name)}>{label}</Button>
            )
        })
        return (
            <div className="btn-group post-status-filter">
                {buttons}
            </div>
        )    
    }
}
