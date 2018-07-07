import { ApplicationActions, ApplicationActionTypes } from './actions';
import {SagaTest1} from "./sagas";


describe('(Jasmine) Example 1', () =>
{
    describe('test group 1', () =>
    {
        it('Jasmine action should be action!', () =>
        {
            expect(ApplicationActions.createAction1(0)).toEqual({type: ApplicationActionTypes.Action1, payload: 0});
        });
    });
});

describe('Test 1', () =>
{
   it('Test Saga', () =>
   {
       const gen = SagaTest1();
       const t = gen.next().value;
       //expect().toEqual(123);
   })
});