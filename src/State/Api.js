export let Api = (function(){
    let logining = (name,pass)=>fetch('/login',{
      method:'post',
      headers: {"Content-type": 'application/json; charset=utf-8'},
      body:JSON.stringify({name,pass})
    })
    return {
        logining
    }
}())