import React from 'react';

export default (Hyper) => {
  const OverlayStyles = {
    backgroundColor: 'blue',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  return class extends React.Component {
    constructor (props) {
      super(props);
      this.state = { };
    }

    render () {
      return React.createElement(Hyper, Object.assign({}, this.props, {
        customChildren: (
          <div style={OverlayStyles}>Hello</div>
        )
      }));
    }
  }
}
