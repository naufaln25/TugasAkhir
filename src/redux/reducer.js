import {combineReducers} from 'redux';

const initialState = {
  name: 'Naufal Nashrulloh',
};

const initialStateRegister = {
  form: {
    fullName: '',
    userName: '',
    email: '',
    password: '',
    rePassword: '',
  },
  title: 'Register Page',
  desc: 'ini adalah desc untuk register',
};

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'Register Ganti Title',
    };
  }

  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const initialStateLogin = {
  form: {
    userName: '',
    password: '',
  },
  info: 'Username / Password Salah silahkan coba lagi',
  isLogin: true,
};

const LoginReducer = (state = initialStateLogin, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const reducer = combineReducers({RegisterReducer, LoginReducer});

export default reducer;
