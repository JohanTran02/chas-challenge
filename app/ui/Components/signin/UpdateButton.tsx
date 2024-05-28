import Link from 'next/link'

const UpdateButton = () => {
  return (
    <Link
      href={'/chas-challenge/dashboard'}
      className='mx-auto w-4/6 max-w-[300px]'
    >
      <button
        type="button"
        className="text-neturalWhite text-lg h-[46px] w-full border-[1px] border-neturalWhite rounded-[50px] ">
        Gå vidare
      </button>
    </Link>
  )
}

export default UpdateButton;
