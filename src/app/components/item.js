import React from 'react'

const Item = ({ item }) => (
    <div className="row">
        <div className="col">
            {item.name}
        </div>
        <div className="col">
            {item.city}
        </div>
        <div className="col">
            {item.country}
        </div>
        <div className="col">
            {item.organization}
        </div>
        <div className="col">
            {item.description}
        </div>
    </div>
)

export default Item