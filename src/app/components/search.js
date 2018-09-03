import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e){
        this.setState({ value: e.target.value.trim() })
    }

    handleSubmit(){
        const { value } = this.state
        if(value === '') return
        const { handleChange } = this.props
        handleChange(value)
    }

    render() {
        const { value } = this.state

        return (
            <div className="element">
                <label>
                    <input type="text" value={value} onChange={this.handleInput} />
                </label>
                <button type="button" onClick={this.handleSubmit}>найти</button>
            </div>
        )
    }
}

export default Search