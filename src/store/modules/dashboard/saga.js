import {takeEvery, put} from 'redux-saga/effects';
import {GET_DATA_REQUEST} from './types';
import {getAllDataFail, getAllDataSuccess} from './actions';
import {showLoader, showToast, hideLoader} from '_utils/methods';
import Config, {SUCCESS} from '_utils/constants/apiConstant';
import {Request} from '_services';

function* onGetDataRequested({data, callBackFxn}) {
  debugger;
  yield* showLoader(false);
  try {
    const response = yield Request.post(Config.getData, data);
    debugger;
    if (response.status === SUCCESS) {
      yield put(getAllDataSuccess(response.data));
      yield* hideLoader(false, '');
    } else {
      showToast(response.message, 'danger');
      yield put(getAllDataFail());
      yield* hideLoader(false, '');
    }
  } catch (error) {
    showToast(error.message, 'danger');
    yield put(getAllDataFail());
    yield* hideLoader(false, '');
  }
}

function* sagaGetData() {
  yield takeEvery(GET_DATA_REQUEST, onGetDataRequested);
}
export default sagaGetData;
