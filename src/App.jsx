import { useState, useEffect  } from 'react';
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {


    const [feedbackType, setFeedbackType] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem('feedbackData'));
        if (savedData) {
            return savedData;
        } return { good: 0, neutral: 0, bad: 0 };
    });

       useEffect(() => {
        window.localStorage.setItem("feedbackData", JSON.stringify(feedbackType));
    }, [feedbackType]);

  
    const {good, neutral, bad} = feedbackType
    const totalFeedback = good + neutral + bad;
    const hasFeedBack = totalFeedback > 0;
    const positivePercentage  = Math.round(((good + neutral) / totalFeedback) * 100)

  
    return (
      <div className="App">
            <Description />
            <Options setFeedbackType={setFeedbackType} resetButton={setFeedbackType} hasFeedBack={hasFeedBack} feedbackType={feedbackType} />
            { !hasFeedBack && <Notification/> }
            {hasFeedBack ? <Feedback value={feedbackType} totalFeedback={totalFeedback} positivePercentage ={positivePercentage } /> : null }
            
    </div>
  )
}

export default App
