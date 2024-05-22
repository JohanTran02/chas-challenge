'use server'

import { ReactNode } from "react"
import { getCookie } from "@/cookies";

const Authentication = ({children}: {children: ReactNode}) => {
  const session = getCookie('Session'); 

  return (
    <>
      {children}
    </>
  )
}

export default Authentication;
