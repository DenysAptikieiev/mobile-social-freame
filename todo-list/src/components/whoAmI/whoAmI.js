import React, {Component} from 'react';


export default class WhoAmI extends Component {

    state = {
        years: 26,
        nationality: 'UK'
    }

    plusYears = () => {
        this.setState({
            years: ++this.state.years
        })
        console.log(this.state);

    }

    minusYears = () => {
        this.setState({
            years: --this.state.years
        })
        console.log(this.state);
    }

    render() {
        const { name, surname, link } = this.props;
        const { years, nationality } = this.state;
        return (
            <>
                <h5>My name is - {name}, surname - {surname}</h5>
                <a href={link}>My profile</a><br/>
                <button onClick={this.plusYears}>+</button>
                <span>my age - {years}</span>
                <button onClick={this.minusYears}>-</button>
                <span>My nationality {nationality}</span> 
            </>
        )
    
    }
}
