import React from "react";
// import Header from "./Header";
// import List from "./List";

class App extends React.Component {
    state = {
        books: ["Whose child is this", "Chicken Soup for the soul"]
    }
    render(){
        return(
            <div>
                {/* <Header/>
                <List/> */}
                <h1>Heloo World</h1>
                {this.state.books.map(item =>
                    <div>
                        <h3>{item}</h3>
                    </div>
                )}
            </div>
        )
    }
}

export default App;