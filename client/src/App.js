// External imports
import React from 'react'
import { Container, Header } from "semantic-ui-react";

// Asset imports

// Local imports
import Players from './components/CompPlayers'
import PlayerNav from './components/CompNav'


function App() {
    return (
        <div className="App page-wrapper">
            <Container style={{ margin: 20 }} className="text-center">
                <PlayerNav />
                <Players />
            </Container>
        </div>
    )
}

export default App