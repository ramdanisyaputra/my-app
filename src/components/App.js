import React from "react";
// import Header from "./Header";
// import List from "./List";
// import Button from "./Button";

class App extends React.Component {
    state = {
        name: "kodeakademia"
    }
    change = () => {
        this.setState({
            name: "kode"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.change}>Click</button>
            </div>
        )
    }
}

export default App;