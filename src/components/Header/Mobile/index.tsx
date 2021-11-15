import React, { useState, useEffect, ReactElement } from 'react'
import Top from './Top'
import Offcanvas from './Offcanvas'

const MobileMenu = (): ReactElement => {
  const [show, setShow] = useState(false)

  // Disable/enable body scroll based on display state
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : ''
  }, [show])

  return (
    <React.Fragment>
      <Top showOffcanvas={show} onHamburgerClick={() => setShow(true)} />
      <Offcanvas show={show} setShow={setShow}>
        <Top insideOffcanvas onHamburgerClick={() => setShow(false)} />
      </Offcanvas>
    </React.Fragment>
  )
}

export default MobileMenu
