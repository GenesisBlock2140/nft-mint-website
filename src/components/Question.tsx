import { useState } from 'react'

interface QuestionProps {
  question: string
  answer: string
}

const Question = ({question, answer}: QuestionProps) => {

  const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(false)
  
  const handleQuestionOpen = () => {
    setIsQuestionOpen(!isQuestionOpen)
  }

  return (
    <>
      <div className='question-box'>
        <div className='question-bar' onClick={handleQuestionOpen}>
          <p>{question}</p>
          <p className='question-more'>{isQuestionOpen ? "-" : "+"}</p>
        </div>
        <p className={`question-answer ${isQuestionOpen ? "question-answer-open": " "}`}>{answer}</p>
        <hr />
      </div>
    </>
  )
}

export default Question