import React from 'react';

const Dropdown = ({ title, options, value, handleChange }) => {
    return (<div className="element">
        <label>{title}</label>
        <select value={value} onChange={handleChange}>
            <option></option>
            {options.map((option, i) => (
                <option key={i}>{option}</option>
            )
            )}
        </select>

    </div>)
}

export default Dropdown