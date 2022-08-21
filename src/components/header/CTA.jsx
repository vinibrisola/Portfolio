import React from 'react'
import CVEN from '../../assets/Vinicius BrisolaEN-us.pdf'
import CVPT from '../../assets/Vinicius BrisolaPT-br.pdf'
const CTA = () => {
  return (
    <div className="cta">
      <a href={CVEN} download className='btn'>Dowload CV EN-us</a>
      <a href={CVPT} download className='btn'>Dowload CV PT-br</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
