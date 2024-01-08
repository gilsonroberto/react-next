import React from 'react'

interface CiculoProps {
  texto: string
  quasePerfeito?: boolean
}

export default function Circulo(props: CiculoProps) {
  console.log('props', props)
  return (
    <div className={`
      flex justify-center items-center
      h-64 w-64 bg-cyan-500 
      text-black text-3xl font-black
      ${props.quasePerfeito ? 'rounded-md' : 'rounded-full'}
    `}>
      {props.texto}
    </div>
  )
}
