
import css from './Feedback.module.css'



export default function Feedback({ value, totalFeedback, positivePercentage }) {
    
    const { good, neutral, bad } = value;

    return (
        <div className={css.feedbackContainer}>
            <p className={css.feedback}>Good: { good }</p>
            <p className={css.feedback}>Neutral: { neutral }</p>
            <p className={css.feedback}>Bad: { bad }</p>
            <p className={css.feedback}>Total: { totalFeedback }</p>
            <p className={css.feedback}>Positive: { positivePercentage }% </p>
            
        </div>
    )
}