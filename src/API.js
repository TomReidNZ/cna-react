import React, { Component } from 'react';

class API extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/reactAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <p className="App-intro">{this.state.apiResponse}</p>
        );
    }
}

export default API;
