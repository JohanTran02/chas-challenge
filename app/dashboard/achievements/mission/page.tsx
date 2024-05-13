import ClickedCategory from '@/app/ui/Components/achievements/ClickedCategory'
import React from 'react'

const page = () => {
  return (
    <>
      <h1 className="text-white text-base font-bold p-6">KATEGORI</h1>
      <div className="bg-white h-full w-full px-4 pt-6 pb-16 rounded-t-3xl overflow-y-auto no-scrollbar">
        <ClickedCategory />
      </div>
    </>
  )
}

export default page