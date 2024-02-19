
import css from  './Options.module.css'


export default function Options({ resetButton, hasFeedBack, setFeedbackType}) {
    
const resetFeedback = () => {
        resetButton({
            good: 0,
            neutral: 0,
            bad: 0
        })
    };
    

    const updateFeedback = (feedbackType) => {
        setFeedbackType((prevFeedback) => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };
    
    return (
    
        <div className={css.buttons}>
            <button className={css.button} onClick={() => updateFeedback ('good')}>Good</button>
            <button className={css.button} onClick={() => updateFeedback ('neutral')}>Neutral</button>
            <button className={css.button} onClick={() => updateFeedback ('bad')}>Bad</button>
            {hasFeedBack && <button className={css.button} onClick={resetFeedback}>Reset</button>}
        </div>

)

}
