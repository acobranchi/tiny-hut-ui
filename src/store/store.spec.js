import * as ActionTypes from '../actions/actionTypes';

import MockDate from 'mockdate';
import { expect } from 'chai';
import { createStore } from 'redux';

import dateHelper from '../utils/dateHelper';
import initialState from '../reducers/initialState';
import rootReducer from '../reducers';

describe('Store', () => {
  let dateModified;
  before(() => {
    MockDate.set(new Date());
    dateModified = dateHelper.getFormattedDateTime();
  });
  after(() => MockDate.reset());

  it('should display results when necessary data is provided', () => {
    const store = createStore(rootReducer, initialState);

    const expected = {
      user: {
        isAuthenticated: false
      }
    };

    const actions = [
      { type: ActionTypes.REGISTER_NEW_USER, dateModified, settings: store.getState(), fieldName: 'registration', value: expected }
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    expect(actual.user.isAuthenticated).to.deep.equal(expected.user.isAuthenticated);
  });

});
