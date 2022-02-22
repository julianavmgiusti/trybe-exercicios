const Redux = require('redux');

const store = Redux.createStore();

const reducer = (state) => {
    return state;
};

const store = Redux.createStore(reducer);

const reducer = (state = { login: false, email:"" }) => {
    return state;
};

const store = Redux.createStore(reducer);
