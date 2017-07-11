// import Overlay from './components/Overlay';

export const decorateConfig = function (config) {
  console.log('-------------- decorateConfig -----------------')

  return Object.assign({}, config, {
    css: `
    ${config.css || ''}
    .hello {
      background-color: blue,
      position: absolute,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: 100px,
      width: 100px,
    }
    `
  });
};
export const decorateHyper = function (Hyper, { React }) {

  return class extends React.Component {
    constructor (props) {
      super(props);
    }

    render () {
      const customChildren = (
        <div className='hello'>Hello</div>
      );

      console.log('------------ RENDERING -------------');

      return <Hyper {...this.props} customChildren={customChildren} />
    }
  }
}
