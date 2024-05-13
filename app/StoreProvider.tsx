'use client' 

import { store } from '@/app/lib/redux/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

const StoreProvider = ({children}: {children: ReactNode}) => {
  return (
    <Provider store={store} children={children} />
  )
}

export default StoreProvider
