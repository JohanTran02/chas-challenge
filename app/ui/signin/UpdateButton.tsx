'use client'

import { useRouter } from "next/navigation"

const UpdateButton = () => {
  const router = useRouter();
  return (
    <button 
      type="button"
      onClick={() => router.push('/dashboard')}
        className="text-neturalWhite text-lg h-[44px] w-4/6 max-w-[300px] border-[1px] border-neturalWhite rounded-[50px] mx-auto">
        Gå vidare
    </button>
  )
}

export default UpdateButton;
