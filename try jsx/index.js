function formatName( user ) {
    return user.firstName + ' ' + user.lastName
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}
const element = (
    <h1>Hello, {formatName( user )}</h1>
)
ReactDOM.render(
    element,
    document.getElementById( 'root' )
)

// use jsx as expression
// function getGreeting( user ) {
//     if ( user ) {
//         return <h1>Hello, {formatName( user )} !</h1>
//     }
//     return <h1>Hello, Stranger</h1>
// }

// Specifying attributes with jsx
// const element = <a href='https://reactjs.com'></a>
// or you could use like this, dont use quote
// const element = <img src={user.avatarUrl}></img>

// jsx mengubah semua value menjadi string sebelum di render, sehingga tidak memungkinkan scripting dapat berjalan