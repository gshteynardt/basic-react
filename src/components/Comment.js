import React, { useCallback } from 'react';
import commentWithToggle from "../decorators/commentWithToggle";

const Comment = ({ comment, openItemID, toggleOpenItem }) => {
const { text, user } = comment;

  const handleBtnClick = useCallback(() => toggleOpenItem(), [toggleOpenItem]);
  return (
    <div>
      <div>
        <h3>{user}</h3>
        <button
          onClick={handleBtnClick}
        >
          {openItemID ? 'close' : 'open'}
        </button>
      </div>

      <section>
        {openItemID && <p>{text}</p>}
      </section>
    </div>
  )
}

export default commentWithToggle(Comment);
