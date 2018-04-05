import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Menu from './Menu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Testing component', () => {
  const onClick = jest.fn();
  const createTestProps = (props) => {
    return {
      onClick,
      timeline: {
        ...props,
      },
    };
  };
  const createWrapper = props => shallow(<Menu {...props} />);

  let wrapper;
  describe('callbacks', () => {
    beforeEach(() => {
      const props = createTestProps({ profile: 'test' });
      wrapper = createWrapper(props);
    });
    it('onClick should be call', () => {
      wrapper.find('button').simulate('click');
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenCalledWith('test');
    });
  });
});
