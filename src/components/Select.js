import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../ac'

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

const mapStateToProps = (state) => ({
  articles: state.articles
})

const mapDispatchToProps = {
  changeSelection
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
