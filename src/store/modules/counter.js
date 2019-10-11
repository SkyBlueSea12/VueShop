 let modules = {
    namespaced: true,
     state:{
         count:1
     },
     mutations: {
        goDecrease(state,params){
            state.count = params.count
        } ,
        goIncrease(state,params){
            state.count = params.count
        } 
     }
 }

 export default modules;