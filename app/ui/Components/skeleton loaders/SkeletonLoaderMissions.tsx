
const SkeletonLoaderMissions = () => {
  const arr = [1,2,3,4];
  return (
    <>
      {arr.map((index) => {
        return (
          <div key={index} 
            className="flex gap-3 h-[135px] border-2 border-darkGreen p-2 rounded-xl animate-pulse">
            <div className="flex-1 flex flex-col items-end justify-center mt-4 space-y-4">
              <div className="bg-gray-500 h-3 w-5/6 rounded-xl"></div>
              <div className="bg-gray-500 h-3 w-5/6 rounded-xl"></div>
            </div>
            <div className="bg-gray-500 max-h-[100px] max-w-[100px] w-full h-full rounded-full" />
          </div>
        )
      })}
    </>
  )
}

export default SkeletonLoaderMissions
