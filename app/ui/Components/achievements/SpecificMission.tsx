'use client'

const SpecificMission = () => {
  const openModal = (): void => {
    const information = document.getElementById('missionsModal') as HTMLDialogElement; 
    information.showModal();
  }

  const closeModal = (): void => {
    const information = document.getElementById('missionsModal') as HTMLDialogElement; 
    information.close();
  }
  return (
    <>
      <div
        onClick={openModal} 
        className="bg-neturalWhite flex justify-between h-[130px] border-2 border-darkGreen p-2 rounded-xl">
        <div className="space-y-1 w-max h-max font-bold">
          <p className="text-sm">Uppdrag</p>
          <p className="text-darkGreen text-xl">IGELKOTT</p>
          <p className="text-sm">Nivå: SVÅR</p>
        </div>
        <div className="bg-green-800 size-24 rounded-full self-center" />
      </div>

      <dialog 
        id="missionsModal"
        className="bg-neutralWhite h-4/6 w-5/6 max-w-[500px] max-h-[700px] m-auto relative rounded-2xl border-darkGreen border-2"
        >
        <div className="flex flex-col w-full h-full p-2">
          <button 
            onClick={closeModal}
            className="absolute right-0 top-0 my-6 mx-4 font-bold text-2xl text-darkGreen">X</button>
          <div className=" w-full mt-24">
            <div className="bg-green-800 size-32 rounded-full self-center mx-auto" />          
          </div>
        </div>
      </dialog>
    </>
  )
}

export default SpecificMission;
