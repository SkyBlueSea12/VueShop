let modules = {
    namespaced: true,
     state:{
         uid:localStorage['uid']?localStorage['uid']:"",
         nickname: localStorage['nickname']? localStorage['nickname'] :"",
         auth_token:localStorage['auth_token']?localStorage['auth_token']:"",
        isLogin:localStorage['isLogin']?Boolean(localStorage['isLogin']):false

     },
     mutations: {
       login(state,params){
             state.uid = params.uid;
             state.nickname = params.nickname;
             state.auth_token = params.auth_token;
             state.isLogin = params.isLogin;
             localStorage['uid'] = params.uid;
             localStorage['nickname'] = params.nickname;
             localStorage['auth_token'] = params.auth_token;
             localStorage['isLogin'] = params.isLogin ;
       },
       outLogin(state){
    
        state.uid = "";
        state.nickname = "";
        state.auth_token = "";
        state.isLogin = false;
        localStorage.removeItem('uid');
        localStorage.removeItem('nickname') ;
        localStorage.removeItem('auth_token');
        localStorage.removeItem('isLogin');
      
       }
     }
 }

 export default modules;