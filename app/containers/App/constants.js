/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */


export const DEFAULT_LOCALE = 'en';
//Post list
export const FETCH_POSTS = 'boilerplate/App/FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'boilerplate/App/FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'boilerplate/App/FETCH_POSTS_FAILURE';
//Post list
export const FETCH_TRAVELS = 'boilerplate/Travels/logic/FETCH_TRAVELS';
export const FETCH_TRAVELS_SUCCESS = 'boilerplate/App/FETCH_TRAVELS_SUCCESS';
export const FETCH_TRAVELS_FAILURE = 'boilerplate/App/FETCH_TRAVELS_FAILURE';

export const CHANGE_FORM = 'boilerplate/App/CHANGE_FORM'
export const SET_AUTH = 'boilerplate/App/SET_AUTH'
export const SENDING_REQUEST = 'boilerplate/App/SENDING_REQUEST'
export const LOGIN_REQUEST = 'boilerplate/App/LOGIN_REQUEST'
export const REGISTER_REQUEST = 'boilerplate/App/REGISTER_REQUEST'
export const LOGOUT = 'boilerplate/App/LOGOUT'
export const REQUEST_ERROR = 'boilerplate/App/REQUEST_ERROR'
export const CLEAR_ERROR = 'boilerplate/App/CLEAR_ERROR'