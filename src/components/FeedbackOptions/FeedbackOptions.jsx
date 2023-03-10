import PropTypes from 'prop-types';
import {
  List,
  Item,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

const options = ['good', 'neutral', 'bad'];

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
