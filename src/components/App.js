import React from "react";
// import Header from "./Header";
// import List from "./List";
// import Button from "./Button";

class App extends React.Component {
    state = {
        name: "kodeakademia",
        text: ""
    }
    click = () => {
        this.setState({
            name: this.state.text,
            text: ""
        })
    }

    change = e => {
        this.setState({
            text: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <input type="text" value={this.state.text} onChange={this.change}/>
                <button onClick={this.click}>Click</button>
            </div>
        )
    }
}

export default App;