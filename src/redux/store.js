import { createStore } from "redux";
import userInfo from './reducer/form.reducer'

const store = createStore(userInfo);

export default store;