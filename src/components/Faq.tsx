import { FC } from 'react'
import Question from './Question'
import { question } from '../utils/data'

const Faq:FC = () => {

  const questionDisplay = question.map(qst => {
    return <Question question={qst.title} answer={qst.answer} />
  })

  return (
    <>
    <div>
      <p className='faq-title'>FAQ</p>
      {questionDisplay}
    </div>
    </>
  )
}

export default Faq