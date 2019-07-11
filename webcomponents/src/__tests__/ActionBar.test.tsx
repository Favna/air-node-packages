import ActionBar from '../ActionBar/ActionBar';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

const mockCallback = jest.fn();
let actionBar: ShallowWrapper;

test('should match snapshot', () => {
  actionBar = shallow(<ActionBar title='42' buttonLabel='label' buttonAction={mockCallback} shouldHaveButton />);
  expect(actionBar).toMatchSnapshot();
});

describe('ActionBar with button', () => {
  test('confirm the button click is registered', () => {
    actionBar = shallow(<ActionBar title='42' buttonLabel='label' buttonAction={mockCallback} shouldHaveButton />);
    const actionButton = actionBar.find('[data-qa="action-bar-button"]');
    actionButton.simulate('click');
    expect(mockCallback).toHaveBeenCalled();
    expect(actionButton.dive().text()).toBe('label');
  });

  test('confirm the button click passes arguments', () => {
    const param = 42;

    actionBar = shallow(
      <ActionBar title='42' buttonLabel='label'
        buttonAction={() => mockCallback(param)}
        shouldHaveButton
      />
    );

    const actionButton = actionBar.find('[data-qa="action-bar-button"]');
    actionButton.simulate('click');
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledWith(param);
    expect(actionButton.dive().text()).toBe('label');
  });
});

describe('ActionBar without button', () => {
  beforeEach(() => actionBar = shallow(<ActionBar title='42' />));

  test('should show title', () => {
    const title = actionBar.find('[data-qa="action-bar-title"]');
    const actionButton = actionBar.find('[data-qa="action-bar-button"]');
    expect(title.text()).toBe('42');
    expect(actionButton.length).toBe(0);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const actionBar = shallow(<ActionBar title='42' />);
    expect(actionBar).toMatchSnapshot();
  });

  test('With Button', () => {
    const actionBar = shallow(
      <ActionBar
        title='42' buttonLabel='label'
        buttonAction={mockCallback} shouldHaveButton
      />
    );
    expect(actionBar).toMatchSnapshot();
  });

  test('AdditionalTest', () => {
    const actionBar = shallow(
      <ActionBar
        title='42' buttonLabel='label'
        buttonAction={mockCallback} shouldHaveButton
        customclasses={'snapshot-class'} data-qa='snapshot-qa'
      />
    );
    expect(actionBar).toMatchSnapshot();
  });
});