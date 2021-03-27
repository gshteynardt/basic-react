import React, { useState } from "react";

const commentWithToggle = WrappedComponent => props => {
  const [openItemId, setOpenItemId] = useState(false);

  const toggleOpenItem = () => setOpenItemId(!openItemId);

  return (
    <WrappedComponent
      openItemID={openItemId}
      toggleOpenItem={toggleOpenItem}
      {...props}
    />
  );
};

export default commentWithToggle;
