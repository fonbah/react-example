import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dropdown from '../../../src/app/components/dropdown'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        title: 'Страна',
        options: ['Россия', 'Франция'],
        value: '',
        handleChange: jest.fn(),
    }

    const enzymeWrapper = mount(<Dropdown {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Dropdown', () => {
        it('should render self', () => {
            const { enzymeWrapper } = setup()

            expect(enzymeWrapper.find('div').hasClass('element')).toBe(true)

            const select = enzymeWrapper.find('select').props()
            expect(select.value).toEqual('')
        })

        it('should call handleChange if option selected', () => {
            const { enzymeWrapper, props } = setup()
            const select = enzymeWrapper.find('select')
            select.props().onChange('Россия')
            expect(props.handleChange.mock.calls.length).toBe(1)
        })
    })
})