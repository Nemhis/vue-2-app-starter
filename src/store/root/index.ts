import {createMapper, Module} from 'vuex-smart-module';

import RootState from '@/store/root/state';
import RootGetters from '@/store/root/getters';
import RootMutations from '@/store/root/mutations';
import RootActions from '@/store/root/actions';

import user from '../user';

const module = new Module({
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
  modules: { user, }
});

const rootMapper = createMapper(module);

export {module as default, rootMapper};
