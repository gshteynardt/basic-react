import React, { useState } from 'react';

const originalComponent = (WrappedComponent) => (props) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleOpenItem = (openItemId) => {
    setOpenItemId(prevValue => prevValue === openItemId ? null : openItemId);
  }

  return (
    <WrappedComponent
      openItemID={openItemId}
      toggleOpen={toggleOpenItem}
      {...props}
    />
  )
}

export default originalComponent;
