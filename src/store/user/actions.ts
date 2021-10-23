import UserState from './state';
import UserGetters from './getters';
import UserMutations from './mutations';
import {ApiActions} from '@/store/api-actions';

export default class UserActions extends ApiActions<UserState, UserGetters, UserMutations, UserActions> {

}
