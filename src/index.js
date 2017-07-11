// import Overlay from './components/Overlay';

export const decorateConfig = function (config) {
  console.log('-------------- decorateConfig -----------------')

  return Object.assign({}, config, {
    css: `
    ${config.css || ''}
    .hello {
      background: #000099;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 100;
    }
    `
  });
};
export const decorateHyper = function (Hyper, { React }) {

  return class extends React.Component {
    render () {
      const customChildren = (
        <div className='hello'>Hello</div>
      );

      console.log('------------ RENDERING -------------');

      return (
        <div>
          <Hyper {...this.props}/>
          {customChildren}
        </div>
      )
    }
  }
}
