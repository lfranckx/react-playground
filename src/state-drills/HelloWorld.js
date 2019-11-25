import React from 'react'

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: "World"
        }
    }

    worldButtonClick = () => {
        this.setState({
            who: "World"
        })
    }

    friendButtonClick = () => {
        this.setState({
            who: "Friend"
        })
    }

    reactButtonClick = () => {
        this.setState({
            who: "React"
        })
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.worldButtonClick()}>World</button>
                <button onClick={() => this.friendButtonClick()}>Friend</button>
                <button onClick={() => this.reactButtonClick()}>React</button>
            </div>
        )
    }
}

export default HelloWorld

// Make a component called HelloWorld inside the ./src/state-drills/ folder. 
// Update your index.js to use the HelloWorld component to check that it works.
// The component should render an outter div element. Inside the div there 
// should be p element containing Hello, world. The word "world" should come 
// from state in a property named who.
// The component should also display 3 buttons, one for each: 
// "World", "Friend" and "React".
// When a user clicks on one of the three buttons, use state and an event 
// handler to update 
// the state property who so that the content in the p element changes.
// If the user clicks the "Friend" button, the p displays Hello, friend!.
// If the user clicks the "React" button, the p displays Hello, React!.
// If the user clicks the "World" button, the p displays Hello, world!.