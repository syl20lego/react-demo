// https://tech.ovoenergy.com/marble-testing-redux-observables/
import { TestScheduler, Observable, Subject } from 'rxjs';
import { merge } from 'rxjs/observable/merge';
import { ActionsObservable } from 'redux-observable';

import epics from './RootEpics';

const createTestScheduler = () => new TestScheduler((actual, expected) => expect(actual).toEqual(expected));
const createActions = (testScheduler, marble, value) => {
  const observable$ = testScheduler.createColdObservable('-a-', { a: { type: 'CHANGE_PROFILE' } });
  return ActionsObservable.from(observable$);
};
const getEpic = (name) => {
  const [epic] = epics.filter(fnct => fnct.name === name);
  return epic;
};

describe('Testing Tweets Epics', () => {
  it('When profile change map call changeProfile and return profile changed', () => {
    const testScheduler = createTestScheduler();
    const action$ = createActions(testScheduler, '-a-', { a: { type: 'CHANGE_PROFILE' } });
    const epic = getEpic('changeProfileEpic');

    const actual$ = epic(action$, null, { changeProfile: () => 'test' });

    testScheduler.expectObservable(actual$).toBe('-b-', { b: { type: 'PROFILE_CHANGED', data: 'test' } });
    testScheduler.flush();
  });
  it('When profile change twice just ignore', () => {
    const testScheduler = createTestScheduler();
    const action$ = createActions(testScheduler, '-aa-', { a: { type: 'CHANGE_PROFILE' } });
    const epic = getEpic('changeProfileEpic');

    const actual$ = epic(action$, null, { changeProfile: () => 'test' });

    testScheduler.expectObservable(actual$).toBe('-b-', { b: { type: 'PROFILE_CHANGED', data: 'test' } });
    testScheduler.flush();
  });
  it('When profile change after intervale, call changeProfile and return profile changed', () => {
    // TBD
  });
});
