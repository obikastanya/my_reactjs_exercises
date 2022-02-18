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


// function App() {
//     return (
//         <div>
//             <Welcome name="Obi" />
//             <Welcome name="John" />
//             <Welcome name="Marry" />
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById( 'root' )
// )

// props adalah attribute yang menyimpan value dari 
// tag tertentu, mirip seperti attribute pada tag html.

function Comment( props ) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />

                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date"> {props.date}</div>
        </div>
    )
}