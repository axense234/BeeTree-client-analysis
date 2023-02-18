import { loginStart, loginSuccess, loginFailure,registerStart, registerSuccess, registerFailure } from "./userSlice";
import axios from "axios";
import { loginRoute, registerRoute } from "../api/api";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(loginRoute,user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};
export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(registerRoute,user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure(err));
  }
};
