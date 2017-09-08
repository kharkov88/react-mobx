import { observable, computed, action } from 'mobx';
import {Api} from './Api'
class Store {
  name = 'mobx-react';
  description = 'flux';
  @observable inputLogin = 'default';
  @observable validator= '';
  @observable loginStatus = true;
  @observable fetching = false;

  @computed get validation(){
    return this.inputLogin.trim() == 0 ?'fatal name':''
  }
  @action onchangeLogin(value){
    this.inputLogin=value
  }
  @action login(name,pass){
    let url = '/login'
    this.fetching=!this.fetching
    Api.logining(name,pass)
    .then(res=>{
      res.status==200 && res.json().then(data=>{
        let obj=JSON.parse(data)
        this.loginStatus = obj.answer
        obj.answer && (document.querySelector('#form').innerHTML = `<span>
        <i class="fa fa-check fa-2x" aria-hidden="true"></i>Succesful logged!</span>`)
        this.fetching=!this.fetching
      })
    })
  }
}
export default Store;
