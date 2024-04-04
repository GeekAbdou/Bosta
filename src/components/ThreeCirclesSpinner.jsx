import { ThreeCircles } from 'react-loader-spinner';

const ThreeCirclesSpinner = () => (
  <ThreeCircles
    visible={true}
    height="80"
    width="80"
    ariaLabel="TailSpin-loading"
    wrapperStyle={{}}
    wrapperClass="TailSpin-wrapper"
    glassColor="#c0efff"
    color="#e30613"
  />
);

export default ThreeCirclesSpinner;
