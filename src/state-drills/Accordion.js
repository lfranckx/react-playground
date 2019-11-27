import React, {Component} from 'react'

export default class Accordion extends Component {

    static defaultProps = { tabs: [] }
    state = {
        activeSectionIndex: null
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({activeSectionIndex: sectionIndex})
    }

    renderItem(section, index, activeSectionIndex) {
        return (
            <li className="Accordion-item" key={index}>
                <button 
                    type='button'
                    onClick={() => this.handleSetActiveSection(index)}
                >
                    {section.title}
                </button>
                {(activeSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const {activeSectionIndex} = this.state
        const {sections} =this.props
        return (
            <ul className='Accordian'>
                {sections.map((section, index) => 
                    this.renderItem(section, index, activeSectionIndex)
                )}
            </ul>
        )
    }
}

// The accordion renders a <ul>, 
// inside the ul will be a li element for each section. 
// Each section's li should be a button containing the section's title.
// When a button is clicked, a p should be rendered below the button 
// that was clicked (inside the li) that displays the section's content. You can use conditional rendering to display this p with the section content.
// When a button is clicked, only that section should be open 
// and the other sections should be closed.
// You should write at least 4 snapshot tests 
// for the Accordion component:
// The component renders an empty li 
// when the sections prop is not supplied
// The component renders no sections as active by default
// The component opens a clicked section
// The component only opens the last section when 
// multiple sections have been clicked.
// As a stretch goal, add styles for the Accordion component 
// in an Accordion.css file.

// Hints:
// You can manage which section is currently active or opened 
// by keeping track of the index of the last clicked button in state.
// You can use array map or forEach to generate the li elements 
// from the section array prop.