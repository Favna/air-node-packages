import { ZeroWidthSpace } from '@src/ZeroWidthSpace';
import { shallow } from 'enzyme';
import React from 'react';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const zeroWidthSpace = shallow(<ZeroWidthSpace />);
    expect(zeroWidthSpace).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const zeroWidthSpace = shallow(<ZeroWidthSpace />);
    expect(zeroWidthSpace).toMatchSnapshot();
  });

  test('AdditionalTest', () => {
    const zeroWidthSpace = shallow(<ZeroWidthSpace />);
    expect(zeroWidthSpace).toMatchSnapshot();
  });
});
