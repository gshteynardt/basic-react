import { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../ac';
import './style.css';

const initState = {
  user: '',
  text: ''
};

const limits = {
  user: {
    min: 10,
    max: 50
  },
  text: {
    min: 10,
    max: 50
  }
};

const CommentForm = ({ addComment }) => {
  const [state, setState] = useState(initState);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addComment(state);
    setState(state => ({
      ...state,
      user: '',
      text: ''
    }));
  };

  const isValidForm = () => ['user', 'text'].every(isValidField);

  const isValidField = (type) => state[type].length >= limits[type].min;

  const getClassName = (type) => (isValidField(type) ? '' : 'form-input__error');

  const handleChange = (type) => (ev) => {
    const { value } = ev.target;
    if (value.length > limits[type].max) return
    setState(state => ({
      ...state,
      [type]: value,
    }));
  }
    return (
      <form onSubmit={handleSubmit}>
        user:{' '}
        <input
          value={state.user}
          onChange={handleChange('user')}
          className={getClassName('user')}
        />
        comment:{' '}
        <input
          value={state.text}
          onChange={handleChange('text')}
          className={getClassName('text')}
        />
        <input type="submit" value="submit" disabled={!isValidForm()} />
      </form>
    )
}

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
  })
)(CommentForm)
