import {Module, createMapper} from 'vuex-smart-module';

import UserState from './state';
import UserMutations from './mutations';
import UserGetters from './getters';
import UserActions from './actions';

const index = new Module({
  state: UserState,
  mutations: UserMutations,
  getters: UserGetters,
  actions: UserActions
});

const userMapper = createMapper(index);
export {index as default, userMapper};
