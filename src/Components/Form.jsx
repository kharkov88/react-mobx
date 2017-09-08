import React from 'react'
import cn from 'classnames'
import {observer} from 'mobx-react'
//import '../Libs/scss/font-awesome.scss'
@observer
export class Form extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let login,pass
        let store = this.props.store,
            cleverName = cn({
                data:true,
                error:!store.loginStatus
            }),
            spinDisplay = cn({
                spin:true,
                spinVisible:store.fetching})
        return(
            <section className="form" id="form">
                <div className="title"><i className="fa fa-fire fa-2x" aria-hidden="true"></i>Login</div>
                <div className="input">
                    <input ref={input=>login=input}className={cleverName}  type="text" onChange={()=>store.onchangeLogin(login.value)} placeholder="login"/>
                    <span className="validator"><b>{store.validation}</b> </span>
                </div>
                <div className="input">
                    <input ref={input=>pass=input} type="password" placeholder="password"/>
                    <span className="validator"><b></b></span>
                </div>
                <button className="btn-login" onClick={()=>store.login(login.value,pass.value)}>login <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                <div className={spinDisplay}><i className="fa fa-cog fa-spin fa-2x fa-fw"></i></div>
            </section>
        )
    }
}