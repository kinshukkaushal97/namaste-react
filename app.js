/* Nested Div using Recat
<div id = "parent">
    <div id = "child">
        <h1> "I am H1 tag !! </h1> 
        <h2> "I am H2 tag !! </h2>
    </div>
    <div id = "child2">
        <h1> "I am H1 tag !! </h1> 
        <h2> "I am H2 tag !! </h2>
    </div>
</div>
*/

const parent = React.createElement("div", {id: "parent"},
    [React.createElement("div", {id: "child"},
    [React.createElement("h1", {id: "tag1"}, "I am H1 tag !!"),
    React.createElement("h2", {id: "tag2"}, "I am H2 tag !!")]),
    React.createElement("div", {id: "child2"},
    [React.createElement("h1", {id: "tag1"}, "I am H1 tag !!"),
    React.createElement("h2", {id: "tag2"}, "I am H2 tag !!")])]
);

//const heading = React.createElement("h1", {id: "heading"}, "Hello World from REACT !");
const root = ReactDOM.createRoot(document.getElementById("root"));

//console.log(heading); //object
console.log(parent); //object

root.render(parent);