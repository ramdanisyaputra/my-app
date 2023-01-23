import React from "react";
import Header from "./Header";
import List from "./List";

class App extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <List/>
                <h1>Heloo World</h1>
            </div>
        )
    }
}

export default App;