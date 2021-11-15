import React from 'react'
import ConditionalLoader from '../ConditionalLoader'

type PropsType = {
  condition: boolean
  children: any
  size?: number
}

const FullPageLoader = (props: PropsType) => {
  return (
    <div className="app-loader">
      <ConditionalLoader condition size={70}>
        {props.children}
      </ConditionalLoader>
    </div>
  )
}

export default FullPageLoader
