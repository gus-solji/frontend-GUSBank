const DEV_URL = 'http://localhost:8080';

export const EXCHANGE_RATE_URL = 'https://tipodecambio.paginasweb.cr/api'; 
export const KEY_RATE = 'rate-storage';
export const KEY_TOKEN = 'token-storage';
export const KEY_USERID = 'user-storage';
export const KEY_USERNAME = 'name-storage';
export const LOGIN_URL = `${DEV_URL}/api/v1/user/login`;
export const LOG_URL = `${DEV_URL}/api/v1/log-user/`;
export const GET_ACCOUNTS_USER_URL = `${DEV_URL}/api/v1/account/byUserId/`;
export const POST_ACCOUNT_URL = `${DEV_URL}/api/v1/account/`;
export const GET_FAVORITE_ACCOUNTS_URL = `${DEV_URL}/api/v1/favorite-account/byUserId/`;
export const POST_FAVORITE_ACCOUNTS_URL = `${DEV_URL}/api/v1/favorite-account/`;
export const GET_USER = `${DEV_URL}/api/v1/user/`;
export const POST_USER = `${DEV_URL}/api/v1/user/`;
export const GET_OWN_ACCOUNTS = `${DEV_URL}/api/v1/account/byBalance/`;
export const GET_ACCOUNT_BY_ACCOUNT = `${DEV_URL}/api/v1/account/byIbanNumber/`;
export const PUT_NEW_PASSWORD = `${DEV_URL}/api/v1/user/`;