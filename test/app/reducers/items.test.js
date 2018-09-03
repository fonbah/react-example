import items from '../../../src/app/reducers/items'

describe('items reducer', () => {
    it('should return the initial state', () => {
        expect(items(undefined, {})).toEqual(
            {
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
        )
    })
})