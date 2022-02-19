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
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount() {
        clearInterval( this.timerID )

    }
    tick() {
        this.setState( {
            date: new Date()
        } )
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
    // state adalah object yang yang menyimpan data pada react
    // jika kita ingin melakukan sesuatu saat element pertama kali
    //  dibuat atau saat dom dihapus kita dapat menambahkan fungsi pada class, yaitu mount dan unmounts.
    // method tersebut disebut lifecycle methods.

    // Ada 3 hal yang harus diingat tentang state
    // 1. Jangan mengubah state secara langsung, assign state hanya dilakukan di constructor
    // this.state.comment = 'hello'
    // tapi gunakanlah setState
    // this.setState( { comment: 'Hello' } )
    // set state or probs is asynchronous . so, you cant relying them.
    // To fix this, use probs or state that accept function instead of object
    // wrong sample:
    // this.setState( {
    //     counter: this.state.counter + this.props.increment
    // } )
    // instead, you could use this
    // this.setState( ( state, props ) => {
    //     counter: state.counter + props.increment
    // } )


    // set stage is merged. When you have 2 different state independently,
    // you can update 2 of them separately. react would merge them, not replace them.

    // constructor( props ){
    //     super( props )
    //     this.state = {
    //         posts: [],
    //         comments: []
    //     }

    // }
    // componentDidMount(){
    //     fetchPost().then( response => {
    //         this.setState(
    //             {
    //                 posts: response.posts
    //             }
    //         )
    //     } )
    //     fetchComments().then( response => {
    //         this.setState( {
    //             comments: response.comments
    //         } )
    //     } )
    // }


    // props bersifat encapsulated, dimana hanya dapat diakses oleh component yang memilikinya
    // Jika child component ingin menggunakan props, props harus di teruskan ke child component

    // < FotmattedDate date = { this.state.date } />
    //     function FormattedDate( props ) {
    //         return <h2>It is {props.date.toLocalTimeString()}.</h2>
    //     }
