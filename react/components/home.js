import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
    costructor() {

    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1><Link to="/quartername">Quest1</Link></h1>
                <h1><Link to="/timeperiod">Quest2</Link></h1>
            </div>
        )
    }
}