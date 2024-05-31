import style from '@/app/ui/style/loader.module.css';

const Loader = () => {
  return (
    <div>
      <div className={style.signInLoader}>
      
    </div>
    <img src="/Images/Component3.svg" alt="Loading" className={style.loaderImage} />
    </div>
    
  );
};

export default Loader;