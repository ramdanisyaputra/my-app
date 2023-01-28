import React from "react";
// import Header from "./Header";
import List from "./List";

class App extends React.Component {
    state = {
        book: "Chicken soup for the soul"
    }
    render(){
        return(
            <div>
                <List name="kodeakademia" test="test" myBook={this.state.book}>
                    <h4>This is title</h4>
                    <p>oh my paragraph</p>
                </List>
            </div>
        )
    }
}

export default App;