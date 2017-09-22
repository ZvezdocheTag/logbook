import {
    ADD_TRAVEL,
} from './constants';
import { v4 } from 'node-uuid'
  /**
   * Load the repositories, this action starts the request saga
   *
   * @return {object} An action object with a type of LOAD_REPOS
   */
  export function addTravel(data) {
    return {
      type: ADD_TRAVEL,
      data: {...data, userId: v4()}
    };
  }
