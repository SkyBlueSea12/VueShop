//   安全认证

  function safeUser(pThis){
    pThis.$request(process.env.VUE_APP_API+"/home/user/safe?token=1ec949a15fb709370f","post",{uid:pThis.$store.state.user.uid,auth_token:pThis.$store.state.user.auth_token}).then(res=>{
        if(!res.code===200){
            pThis.$store.commit("user/outLogin");
            pThis.$router.replace("/login");
        }
       
    });
  }

  export {
    safeUser
  }