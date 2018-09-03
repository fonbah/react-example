import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ItemList from './items-list'

import { fetchData } from '../actions/items'

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchData({}))
    }

    render() {
        return (
            <main className="container-fluid">
                <Route exact path='/' component={ItemList} />
            </main>
        )
    }
}

export default App