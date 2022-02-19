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


function Form() {
    function handleSubmit( e ) {
        e.preventDefault()
        console.log( 'You clicked submit.' )
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type='submit'>Submit</button>
        </form>
    )
}