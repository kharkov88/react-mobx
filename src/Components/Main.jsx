import React from 'react';
import { observer } from 'mobx-react';
import {Form} from './Form'
import '../Style/Main.scss'
@observer
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }
  render() {
    return (
      <div>   
        <Form store={this.store}/>
      </div>
    );
  }
}

Main.propTypes = {
  store: React.PropTypes.object,
};

export default Main;