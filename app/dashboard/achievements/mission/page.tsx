import ClickedCategory from '@/app/ui/Components/achievements/ClickedCategory'

const page = () => {
  return (
    <>
      <h1 className="text-white font-bold pl-6 pt-6 pb-3">KATEGORI</h1>
      <div className="bg-white h-full w-full px-4 pt-6 pb-16 rounded-t-3xl overflow-y-auto no-scrollbar">
        <ClickedCategory />
      </div>
    </>
  )
}

export default page