import style from '@/app/ui/style/loader.module.css';
import ImageHandler from '../ImageHandler';

const Loader = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4'>
        <ImageHandler image={{
          src: "Component3.svg",
          alt: "Loading",
          width: 60,
          height: 60,
          className: style.loaderImage
        }} />
        <div className={`${style.loader}`}></div>
      </div>
    </div>

  );
};

export default Loader;