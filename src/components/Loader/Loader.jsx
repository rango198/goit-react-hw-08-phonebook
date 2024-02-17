import { RotatingLines } from 'react-loader-spinner';

const Loader = ({ size }) => {
  return (
    <>
      <RotatingLines
        visible={true}
        height={size}
        width={size}
        color="#212121"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};
export default Loader;
