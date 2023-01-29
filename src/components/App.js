import React from "react";
import "../styles/App.css";
// import Header from "./Header";
// import List from "./List";
// import Button from "./Button";

const App = () => {
    return (
        <div className="box">
            <h1 style={myStyle}>Hello World</h1>
        </div>
    )
}

const myStyle = {
    color: "blue",
    fontSize: "50px"
}
export default App;