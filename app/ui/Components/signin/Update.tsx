import UpdateButton from "./UpdateButton"

const Update = () => {
  return (
    <div
      id="modal"
      className="bg-darkGreen h-[613px] w-full flex flex-col justify-between rounded-lg mt-8 pt-8 pb-12 px-12"
    >
      <article className="h-[222px] w-full max-w-[340px] mx-auto ">
        <h1 className="text-2xl text-nowrap text-center text-neturalWhite font-semibold">NYA UPDATERINGAR</h1>
        <ul className="h-full w-full list-inside space-y-8">
          <li className="pt-8 text-neturalWhite font-semibold pl-3">
            <p>{`3 nya stamps har lagts till i "Träd"-kategorin`}</p>
          </li>
          <li className="text-neturalWhite font-semibold pl-3">
            <p>{`3 nya stamps har lagts till i "Träd"-kategorin`}</p>
          </li>
          <li className="text-neturalWhite font-semibold pl-3">
            <p>{`3 nya stamps har lagts till i "Träd"-kategorin`}</p>
          </li>
        </ul>
      </article>

      <UpdateButton />
    </div>
  )
}

export default Update
