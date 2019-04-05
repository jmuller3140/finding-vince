import React from 'react'
import './style.scss'
import Reveal from 'react-reveal/Reveal'
import { getEffect } from '../utils'

const QuoteComponent = ({ quote, style }) => {
  const effect = getEffect(style)
  return (
    <Reveal effect={effect}>
      <div className='quote-container'>
        <div className='quote-content'>
          {quote}
        </div>
      </div>
    </Reveal>
  )
}

export default QuoteComponent