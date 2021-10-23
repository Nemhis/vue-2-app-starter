import {ApiActions} from '@/store/api-actions';

import RootState from './state';
import RootGetters from './getters';
import RootMutations from './mutations';


export default class RootActions extends ApiActions<RootState, RootGetters, RootMutations, RootActions> {
}
