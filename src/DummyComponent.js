import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './DummyComponent.css';

class DummyComponent extends React.PureComponent {
  render() {
    return <div className="Dummy-Component">
      <RaisedButton
        label="Hello"
        onTouchTap={ this.props.sayHello } />
    </div>
  }
}

export default DummyComponent;