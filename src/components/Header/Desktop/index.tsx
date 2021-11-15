import React, { useState, ReactElement } from 'react'
import Top from './Top'
import Bottom from './Bottom'
import MegaMenu from './MegaMenu'

const DesktopMenu = (): ReactElement => {
  const [showMegaMenu, setShowMegaMenu] = useState(false)
  return (
    <React.Fragment>
      <Top />
      <Bottom
        toggleMegaMenu={() => {
          setShowMegaMenu(!showMegaMenu)
        }}
      />
      <MegaMenu show={showMegaMenu} setShow={setShowMegaMenu} />
    </React.Fragment>
  )
}

export default DesktopMenu
