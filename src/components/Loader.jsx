import { TailSpin } from 'react-loader-spinner';

const Loader = () => (
  <TailSpin
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

export default Loader;
