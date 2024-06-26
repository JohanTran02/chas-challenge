import style from '@/app/ui/style/LoginLoader.module.css';

const LoginLoader = ({createAccount}: {createAccount: boolean}) => {
  return (
    <div className={style.loaderOverlay}>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-white text-3xl font-bold mx-auto pd-12'>{createAccount ? 'Skapar konto' : 'Loggar in'}</h1>
        <div className={style.LoginLoader}></div>
      </div>
    </div>
  );
};

export default LoginLoader;