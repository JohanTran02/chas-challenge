import ImageHandler from "../../ImageHandler";

const GoogleButton = () => {
  return (
    <div className="w-full h-[69px] space-y-2">
      <p className="font-bold text-center">eller</p>
      <div className="flex bg-white rounded-lg border-[1px] border-black">
        <div className="flex-1  flex justify-end items-center pr-8">
          <ImageHandler image={{
            src: "/Images/google.svg",
            alt: "google icon",
            width: 35,
            height: 35,
            className: 'size-[31px] ',
            priority: true,
            checkPath: true,
          }} />
        </div>
        <div className="h-[45px] flex items-center flex-[3] rounded-l">
          <p className="font-bold text-[14px]">Logga in med Goggle</p>
        </div>
      </div>
    </div>
  )
}

export default GoogleButton;
