

import {fetch} from 'whatwg-fetch'
import axios from 'axios';
//export function request 导出方式一
function request(url,type,data={}){
    //return fetchRequest(url,type,data)
    return axiosRequest(url,type,data)
}

function axiosRequest(url,type,data={}){
    let params={};
    type=type || "get";//兼容所有浏览器 让默认情况下为get请求
    if(type==='post'){
        if(data instanceof Object){
            params=new URLSearchParams()
            for(let key in data){
                params.append(key,data[key]);
            }
        }
    }else if(type==='file'){
        type="post";
        if(data instanceof Object){
            params=new FormData()
            for(let key in data){
                params.append(key,data[key]);
            }
        }
    }
    let $axios=axios({
        url:url,
        method:type,
        data:params
    });
     //  axios结果多带了一个data  加上.then让两者结果一样
    return $axios.then(res=>res.data);
}

function fetchRequest(url,type,data={}){
    let config={},params=""
    type=type || "get";
    config={
        method:type
    };
    if(type==='post'){
        if(data instanceof Object){
            for(let key in data){
                params+="&"+key+"="+encodeURIComponent(data[key]);
            }
            params=params.slice(1);
        }
        config={
            method:type,
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:params
        }
    }else if(type==='file'){
        params=new FormData();
        if(data instanceof Object){
            for(let key in data){
                params.append(key,data[key]);
            }
        }
        config={
            method:"post",
            body:params
        }
    }
    let result=fetch(url,config).then(res=>res.json());
    return result;
}

//导出方式二
export {
    request
}
