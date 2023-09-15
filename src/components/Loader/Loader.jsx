import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.spinner}>
      <Oval
        height={80}
        width={80}
        color="#0caef4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#0caef4"
        strokeWidth={2}
        strokeWidthSecondary={2}
/>
    </div>
  );
};

export default Loader;