import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from 'vuex-smart-module';

import RootStore from './root'

Vue.use(Vuex);

export default createStore(RootStore, {
  strict: process.env.NODE_ENV !== 'production'
});
