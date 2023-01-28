import React from "react";
// import Header from "./Header";
import List from "./List";

class App extends React.Component {
    state = {
        book: "Chicken soup for the soul",
        author: "Bill Willson"
    }
    render(){
        return(
            <div>
                <List book = { this.state.book } author = { this.state.author }/>
            </div>
        )
    }
}

export default App;