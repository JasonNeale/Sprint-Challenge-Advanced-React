import React from 'react'
import { Table } from "semantic-ui-react"


function TableRow(props) {
    
    return (
        <Table.Row>
            <Table.Cell>{props.playerDetails.id}</Table.Cell>
            <Table.Cell>{props.playerDetails.name}</Table.Cell>
            <Table.Cell>{props.playerDetails.country}</Table.Cell>
            <Table.Cell>{props.playerDetails.searches}</Table.Cell>
        </Table.Row>
    )
}

export default TableRow