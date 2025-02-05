import { createStore } from 'vuex';
import auth from './auth';

// state
// mutators
// getters
// actions
// modules
const store = createStore({
  modules: {
    auth: auth,
  },
});

export default store;
