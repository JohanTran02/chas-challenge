import style from '@/app/ui/style/loader.module.css';
import Image from "next/image"

const Loader = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4'>
        <Image src="/Images/Component3.svg" alt="Loading" priority width={0} height={0} className={`${style.loaderImage}`} />
        <div className={`${style.loader}`}></div>
      </div>
    </div>

  );
};

export default Loader;