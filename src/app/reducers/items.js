import {
  FETCH_START,
  LOAD_ITEMS,
  UPDATE_ITEMS,
} from '../actions/items'


const initialState = {
  items: [],
  total: 0,
  limit: 12,
  is_fetching: false,
  filters: {
    search: '',
    country: '',
    city: '',
    page: 1,
  }
}

function updateFilters(filters, { filter, value }) {
  switch (filter) {
    case 'search':
    case 'country':
    case 'city':
      return { ...filters, [filter]: value, page: 1 }
    case 'page':
      return { ...filters, page: value }
    default:
      return filters
  }
}

function items(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return { ...state, is_fetching: true }
    case LOAD_ITEMS:
      return { ...state, items: action.items, total: action.items.length, limit: action.items.length, is_fetching: false }
    case UPDATE_ITEMS:
      return { ...state, filters: updateFilters(state.filters, action) }
    default:
      return state
  }
}

export default items
