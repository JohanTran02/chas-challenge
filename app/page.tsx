import Loader from './ui/Components/Loader';

export default function Home() {
  return (
    <div className="fixed inset-0 grid place-content-center bg-darkGreen w-full h-full z-30">
      <Loader />
    </div>
  );
}
