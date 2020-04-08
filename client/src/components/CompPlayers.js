// External imports
import React from 'react'
import axios from 'axios'
import { Icon, Label, Menu, Table } from "semantic-ui-react"

// Asset imports

// Local imports
import PlayerRow from './CompPlayerRow'


class Players extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playerData: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/players`)
          .then(res => {
            const playerData = res.data
              this.setState({ playerData: playerData })
              console.log('playerData: ', playerData)
          })
      }

    handleChanges = (e) => {
        const getLastColor = localStorage.getItem("lastColor")
        const color = e.target.style.backgroundColor
        console.log('color: ', color)
        switch (color) {
            case "rgb(133, 180, 255)":
                switch (getLastColor) {
                    case "": 
                        e.target.style.backgroundColor = ""
                        break
                    case "rgb(51, 51, 51)":
                        e.target.style.backgroundColor = "rgb(51, 51, 51)"
                        break
                }
                break
            case "":
                localStorage.setItem("lastColor", "")
                e.target.style.backgroundColor = "rgb(133, 180, 255)"
                break
            case "rgb(51, 51, 51)":
                localStorage.setItem("lastColor", "rgb(51, 51, 51)")
                e.target.style.backgroundColor = "rgb(133, 180, 255)"
                break
        }
    }

    render() {

        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Country</Table.HeaderCell>
                        <Table.HeaderCell>Searches</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body onClick={this.handleChanges}>
                    {this.state.playerData.map(item => {
                        return <PlayerRow key={item.id} playerDetails={item} />
                    })}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>

                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }
}

export default Players