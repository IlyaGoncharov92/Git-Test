import {call, put, takeLatest} from 'redux-saga/effects';
import { ApplicationActions, ApplicationActionTypes } from './actions';
import axios from 'axios';
import { promise } from '../common/sagas';

export const ttt = 123;

interface IPostResult
{
    data: { userId: number, id: number, title: string, body: string };
}

export function* Saga1()
{
    //todo: no typing here, see https://github.com/Microsoft/TypeScript/issues/2983
    const result:IPostResult = yield promise(() => axios.get<IPostResult>('https://jsonplaceholder.typicode.com/posts/1'));

    yield put(ApplicationActions.createAction4(JSON.stringify(result.data)));
}


export function* Saga1Watcher()
{
    yield takeLatest(ApplicationActionTypes.Action3, Saga1);
}

const test1 =() => new Promise(resolve => {
    setTimeout(() =>
    {
        resolve(123);
    }, 2000)
});

export function* SagaTest1()
{
    const res = yield call(() => test1());
    console.log('res', res);
}

const gen = SagaTest1();

const t = gen.next().value;
const t1 = gen.next().value;

console.log('t', t);
console.log('t1', t1);