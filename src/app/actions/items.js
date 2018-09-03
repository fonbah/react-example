export const FETCH_START = 'FETCH_START'
export const LOAD_ITEMS = 'LOAD_ITEMS'
export const UPDATE_ITEMS = 'UPDATE_ITEMS'

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_START })
  fetch('/data.json', {
    method: 'GET',
  }).then((response) => {
    if (response.ok) {
      return response.json()
    }
  }).then(items => {
    dispatch({ type: LOAD_ITEMS, items })
  }).catch(console.log)
}

export const updateItems = (filter, value) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ITEMS, filter, value })
    dispatch({ type: FETCH_START })
    dispatch(fetchData())
  }
}