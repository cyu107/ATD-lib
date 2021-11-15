```jsx padded
  const [showModal, setShowModal] = React.useState(false);

  <>
    <button onClick={() => setShowModal(true)}>Open large modal</button>

    <Modal
      open={showModal}
      size="large"
      onClose={() => setShowModal(false)}
      title="Large modal title"
      actions={
        <div style={{ display: 'flex' }}>
          <button>Action 1</button>
          <button>Action 2</button>
        </div>
      }
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Modal>
  </>
```


```jsx padded
  const [showModal, setShowModal] = React.useState(false);

  <>
    <button onClick={() => setShowModal(true)}>Force user action modal</button>

    <Modal
      forceAction
      footerNoSeparator
      headerNoSeparator
      open={showModal}
      size="small"
      title="Force user action"
      actions={
        <div style={{ display: 'flex' }}>
          <button onClick={() => setShowModal(false)}>Action 1</button>
          <button onClick={() => setShowModal(false)}>Action 2</button>
        </div>
      }
    >
      <p>The user can't close this modal unless he clicks one of the footer buttons. Overlay clicking is disabled and close button is hidden.</p>
    </Modal>
  </>
```
