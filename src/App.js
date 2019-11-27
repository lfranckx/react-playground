import React, { Component } from 'react'
import './App.css'
// import Messages from './Messages'
// import TheDate from './state/TheDate'
// import Counter from './state/Counter'
// import HelloWorld from './state-drills/HelloWorld'
// import Bomb from './state-drills/Bomb'
// import RouletteGun from './state-drills/RouletteGun'
import Tabs from './state/Tabs'
import Accordion from './state-drills/Accordion'

class App extends Component {
  render() {
    const tabsProp = [
      { 
        name: 'First tab',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' 
      },
      { 
        name: 'Second tab',
        content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
      },
      { 
        name: 'Third Tab',
        content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
      }
    ]

    const sectionsProp = [
      {
        title: "Section 1",
        content: "Lorem ipsum dolor amet actually venmo wayfarers health goth 90's letterpress, migas whatever butcher messenger bag cred dreamcatcher. Fixie aesthetic polaroid shoreditch."
      },
      { title: "Section 2",
        content: "Vice pickled wolf single-origin coffee. Chicharrones 3 wolf moon shabby chic, fixie deep v pinterest art party man bun shaman truffaut direct trade forage bitters tacos marfa. "
      },
      {
        title: "Section 3",
        content: "Yuccie lyft gochujang fam shabby chic pug lo-fi enamel pin readymade, poke cold-pressed fixie aesthetic freegan plaid. Blue bottle occupy direct trade af dreamcatcher hot chicken."
      }
    ]
    
    return (
      <div className="App">
        <h1>React Playground</h1>
        {/* <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate />
        <Counter count={123} />
        <HelloWorld />
        <Bomb />
        <RouletteGun /> */}
        <Tabs tabs={tabsProp} />
        <Accordion sections={sectionsProp} />
      </div>
    );
  }
}

export default App;