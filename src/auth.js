import {KEY_TOKEN,KEY_USERID,KEY_USERNAME} from './constFile';

class Auth {


    login(cb){
        this.authenticated = true;
        cb();
    }

    logout(cb){
        this.authenticated = false;
        sessionStorage.removeItem(KEY_TOKEN);
        sessionStorage.removeItem(KEY_USERID);
        sessionStorage.removeItem(KEY_USERNAME);
        cb();
    }

}

export default new Auth();