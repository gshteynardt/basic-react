import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../ac'
import { articlesSelector, selectedSelector } from "../selectors";

const SelectFilter = ({ articles, changeSelection}) => {

  const handleChange = (selected) => changeSelection(selected);

    const options = articles.map((article) => ({
      label: article.title,
      value: article.id
    }));

    return (
      <Select
        options={options}
        value={changeSelection}
        onChange={handleChange}
        isMulti
      />
    )
}

Select.propTypes = {
  articles: PropTypes.array.isRequired
}

export default connect(
  state => ({
    selected: selectedSelector(state),
    articles: articlesSelector(state),
  }),
  { changeSelection }
)(SelectFilter)
