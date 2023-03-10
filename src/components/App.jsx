import { useState } from 'react';
import { Layout } from 'components/Layout.styled';
import { GlobalStyle } from 'components/GlobalStyle';
import { Wrap } from 'components/Wrap.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const quantityPositiveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();

    if (!good) {
      return 0;
    }

    return Math.round((good * 100) / total);
  };

  return (
    <Layout>
      <GlobalStyle />
      <Wrap>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={quantityPositiveFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrap>
    </Layout>
  );
};
