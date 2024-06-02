
const SkeletonLoaderCategory = () => {

  const arr = [1, 2, 3, 4];
  return (
    <>
      {arr.map((index) => {
        return <div
          key={index}
          className="flex flex-col items-center font-bold h-56 max-w-[150px] min-w-[150px] category-card mx-auto border-2 border-black rounded-xl animate-pulse">
          <div className="flex-[3] grid place-items-center">
            <div className="w-[100px] h-[100px] bg-gray-500 rounded-full">

            </div>
          </div>
          <div className="flex-1 w-full flex flex-col items-center gap-3">
            <div className="w-5/6 h-2 bg-gray-500 rounded-xl"></div>
            <div className="w-5/6 h-2 bg-gray-500 rounded-xl"></div>
          </div>
        </div>
      })}
    </>
  )
}

export default SkeletonLoaderCategory;
