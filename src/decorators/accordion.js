import React, { useState } from 'react'

const originalComponent = (WrappedComponent) => (props) => {
  const [openItemId, setOpenItemId] = useState(null)

  return (
    <WrappedComponent
      openItemID={openItemId}
      toggleOpen={setOpenItemId}
      {...props}
    />
  )
}

export default originalComponent
