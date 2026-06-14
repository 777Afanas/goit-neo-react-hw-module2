import { useState } from "react";
import Descriptions from "../Descriptions/Descriptions";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

// import transactions from '../../data/transactions.json';
// import '../../../node_modules/modern-normalize/modern-normalize.css';

const App = () => {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  return (
    <div>
      <Descriptions />
      <Options onGood={() => updateFeedback("good")} />
      <Feedback />
    </div>
  );
};

export default App;
