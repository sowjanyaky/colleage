import React from 'react';

class Test7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }

    componentDidMount() {
        setTimeout(() => { this.setState({ favoritecolor: "yellow" }) }, 1000);
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML = "After the update, the favorite color is " + this.state.favoritecolor;
    }

    render() {
        return (
            <>
                <h1>My favorite color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </>
        );
    }
}

export default Test7;
