// function Button( props ) {
//     return ( <button onClick={activateLasers}>Activate Laser</button> )
// }
// ReactDOM.render(
//     <Button />,
//     document.querySelector( '#root' )
// )
// function activateLasers() {
//     console.log( 'laser is active' )
// }
// use curly braces to write function, not a quote.
// to preventDefault behavior, you cant just return false. you need to do preventDefault


// function Form() {
//     function handleSubmit( e ) {
//         e.preventDefault()
//         console.log( 'You clicked submit.' )
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <button type='submit'>Submit</button>
//         </form>
//     )
// }

// in react, we didnt use addEventListener, 
// we create event when element is initialy rendered.
// class Toggle extends React.Component {
//     constructor( props ) {
//         super( props )
//         this.state = { isToggleOn: true }
//         // bind is necesary to make this work on callback
//         this.handleClick = this.handleClick.bind( this )
//     }
//     handleClick() {
//         this.setState( prevState => ( {
//             isToggleOn: !prevState.isToggleOn
//         } ) )
//     }
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         )
//     }
// }
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById( 'root' )
// )


// if you didnt like the way this binding work, 
// you could use this experimental public class field syntax. 
// But you need to remember, this syntax is experimental.
// 
class LoggingButton extends React.Component {
    handleClick = () => {
        console.log( 'this is : ', this )
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        )
    }
}
ReactDOM.render(
    <LoggingButton />,
    document.getElementById( 'root' )
)

    // passing argument to event handler.
    // < button onClick = {( e )=> this.deleteRow( id, e )}></button >
    //     <button onClick={this.deleteRow.bind( this, id )}>Delete Row</button>
