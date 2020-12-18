import React from 'react'

const Article = (props) => {
  const { article, isOpen, toggleOpen } = props
  const handleBtnClick = () => toggleOpen(article.id)

  return (
    <div>
      <div>
        <h3>{article.title}</h3>
        <button onClick={handleBtnClick}>{isOpen ? 'close' : 'open'}</button>
      </div>
      {isOpen && <section>{article.text}</section>}
    </div>
  )
}

export default React.memo(Article)
