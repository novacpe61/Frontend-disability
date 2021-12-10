import Api from '../apiServices/Api'
export default {
  index(){
    return Api().get('users');
  },
  upload(formData){
    
    return Api().post('users/upload',formData,
    {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  })
  }
  
};