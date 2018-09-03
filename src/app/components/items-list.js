import React from 'react'
import { connect } from 'react-redux'

import Item from './item'
import Dropdown from './dropdown'
import Search from './search'
import Pagination from './pagination'

import { updateItems } from '../actions/items'

const mapStateToProps = ({ items }) => ({
    items: items.items,
    search: items.filters.search,
    city: items.filters.city,
    country: items.filters.country,
    total: items.total,
    limit: items.limit,
    page: items.page,
})

const mapDispatchToProps = (dispatch) => ({
    handleFilter: type => e => {
        const value = typeof e === 'object' ? e.target.value : e
        dispatch(updateItems(type, value))
    },
})

const ItemsList = ({ items, total, limit, page, search, city, country, handleFilter }) => (
    <div className="container">
        <h3>Список материалов</h3>
        <hr />
        <Dropdown title="страна" options={[...(new Set(items.map(item => (item.country))))].filter(item => (item !== ''))} value={country} handleChange={handleFilter('country')} />
        <Dropdown title="город" options={[...(new Set(items.map(item => (item.city))))].filter(item => (item !== ''))} value={city} handleChange={handleFilter('city')} />
        <Search value={search} handleChange={handleFilter('search')} />
        {items.map((item, i) => (<Item key={i} item={item} />)
        )}
        {items.length > 0 && <Pagination page={page} limit={limit} total={total} onClick={handleFilter('page')} />}
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)