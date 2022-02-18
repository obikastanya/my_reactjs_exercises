// componen is literally a function of javascript
function Welcome( props ) {
    return <h1>Hello, {props.name}</h1>
}

// we can also use class as component

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }

// how to render the component, note: react component start with Capitalize Letter
// const element = <Welcome name="Sara" />

// ReactDOM.render(
//     element,
//     document.querySelector( '#root' )
// )


function App() {
    return (
        <div>
            <Welcome name="Obi" />
            <Welcome name="John" />
            <Welcome name="Marry" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
)