import React, { useState, ReactElement } from 'react'
import Button from '@bit/littlebox.atd.button'
import Container from '@bit/littlebox.atd.container'
import Modal from 'components/Modal'

const ModalExample = (): ReactElement => {
  const [showModal, setShowModal] = useState(false)
  const [showModalMedium, setShowModalMedium] = useState(false)
  const [showModalSmall, setShowModalSmall] = useState(false)

  return (
    <Container>
      <Button variant="secondary" onClick={(): void => setShowModal(true)}>
        Open the large modal
      </Button>
      <Button variant="secondary" onClick={(): void => setShowModalMedium(true)}>
        Open the medium modal
      </Button>
      <Button variant="secondary" onClick={(): void => setShowModalSmall(true)}>
        Open the small modal
      </Button>

      <Modal
        open={showModal}
        onClose={(): void => setShowModal(false)}
        title="Large modal"
        actions={
          <div style={{ display: 'flex' }}>
            <Button variant="tertiary" onClick={(): void => setShowModal(false)}>
              Cancel
            </Button>
            <Button onClick={(): void => setShowModal(false)}>Submit</Button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </Modal>

      <Modal
        footerNoSeparator
        headerNoSeparator
        footerAlign="left"
        open={showModalMedium}
        size="medium"
        onClose={(): void => setShowModalMedium(false)}
        title="Thank you for signing up for auto renewal!"
        actions={<Button onClick={(): void => setShowModalMedium(false)}>Okay</Button>}
      >
        <p>
          Your payment information has been securely stored and will be used when your order is
          renewed for its next cycle.
        </p>
        <p>If you wish to cancel auto renewal, you can do so at any time.</p>
      </Modal>

      <Modal
        forceAction
        footerNoSeparator
        headerNoSeparator
        open={showModalSmall}
        size="small"
        onClose={(): void => setShowModalSmall(false)}
        title="Small modal"
        actions={
          <div style={{ display: 'flex' }}>
            <Button variant="tertiary" onClick={(): void => setShowModalSmall(false)}>
              Cancel
            </Button>
            <Button onClick={(): void => setShowModalSmall(false)}>Submit</Button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </Modal>
    </Container>
  )
}

export default ModalExample
