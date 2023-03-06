import PropTypes from 'prop-types';


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
      <ul>
        {
          options.map((option) => {
            return (
              <li key={option}>
                <button>{option}</button>
              </li>
            )
          })
        }
      </ul>
    );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.string.isRequired
}