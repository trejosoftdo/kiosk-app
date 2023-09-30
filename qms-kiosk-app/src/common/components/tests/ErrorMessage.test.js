import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ErrorMessage from '../ErrorMessage';

jest.mock('react-i18next');

describe('ErrorMessage component', () => {
  it('renders with no provided props as expected', () => {
    const renderer = new ShallowRenderer();
    const wrapper = renderer.render(<ErrorMessage />);
    expect(wrapper).toMatchSnapshot();
  });
});