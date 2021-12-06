import Api from '../apiServices/Api'

export default {
  index(){
    return Api().get('users');
  },
};