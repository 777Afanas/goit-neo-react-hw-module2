// import style from "./Profile.module.css";

const Feedback = ({ goodValues, neutralValues, badValues, totalValues, positiveVal }) => {
  return (
    <div>
      <p>Good: {goodValues}</p>
      <p>Neutral: {neutralValues}</p>
      <p>Bad: {badValues}</p>
      <p>Total: {totalValues}</p>
      <p>Positive: {positiveVal}%</p>
    </div>
  );
};

export default Feedback;
