import React from 'react'

class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log(this.count)
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        const { count } = this.state
        if (count > 7) {
            clearInterval(this.interval)
            return 'Boom!!!!'
        } else if (count % 2 === 0) {
            return 'tick'
        } else {
            return 'tock'
        }
        // this.string = ""
        // if(this.state.count % 2 === 0) {
        //     this.string = "tick"
        // } else if(this.state.count % 2 !== 0) {
        //     this.string = "tock"
        // } else if (this.state.count > 7) {
        //     this.string = "BOOM!!!"
        //     this.componentWillUnmount()
        // }
    }

    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
            </div>
        )
    }
}

export default Bomb

// Make a component called Bomb inside the ./src/state-drills/ folder. 
// Update your index.js to use the Bomb component to check that it works.
// The component should render a div element. 
// Inside the div there should be a p that contains content of either
// "tick", "tock" or "BOOM!!!!".
// The component will have an initial state with a property count of 0.
// When the component mounts, register an interval that adds one to 
// the count in state every second.
// When the component unmounts, clear the interval.
// When the count is divisible by 2, display the word "tick".
// When the count isn't divisible by 2, display the word "tock".
// If the count goes equal to or above 8, display "BOOM!!!!".
// When the count goes above or equal to 8, also clear the interval!