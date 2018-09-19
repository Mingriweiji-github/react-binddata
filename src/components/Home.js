import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age:props.initialAge,
            status:0,
            homeLink:props.initialName,
        };
        setTimeout(() => {
            this.setState({
                status:1
            })
        },1000);
    }
    onMakeOlder() {
        this.setState({
            age:this.state.age + 1
        })
    }
    handleGreet() {
        this.props.greet(this.state.age);
    }
    handleChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    onChangeContent(event) {
        this.setState({
            homeLink:event.target.value
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <div>Home.js name is {this.props.name} age is {this.state.age} </div>
                        <p>status:{this.state.status}</p>
                        <button onClick={() => {this.onMakeOlder()}} className='btn btn-primary'>Make me older</button>
                        <br/>
                        <br/>
                        <button onClick={this.handleGreet.bind(this)} className='btn btn-primary'>Greet</button>
                        <hr/>
                        <input type="text" defaultValue={this.props.initialName} value={this.state.initialName} onChange={(event) => this.onChangeContent(event) }/>
                        <button onClick={this.handleChangeLink.bind(this)} className='btn btn-primary'>Change Header link</button>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    user:PropTypes.object,
    greet:PropTypes.func,
    initialName:PropTypes.string
};