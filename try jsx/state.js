// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     )
//     ReactDOM.render(
//         element,
//         document.getElementById( 'root' )
//     )
// }
// setInterval( tick, 1000 )

// Make it more encapsulated

class Clock extends React.Component {
    constructor( props ) {
        super( props )
        this.state = { date: new Date() }

    }
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.
                </h2>
            </div >
        )
    }
}
function tick() {
    ReactDOM.render(
        <Clock />,
        document.getElementById( 'root' )
    )
}
setInterval( tick, 1000 )