import Circulo from '@/components/basicos/Circulo'
import React from 'react'

export default function PaginaCirculos() {
  return (
    <div className={`
      flex justify-around  items-center h-screen
    `}>
      <Circulo texto="Circ #1"/>
      <Circulo texto="Circ #2"/>
      <Circulo texto="Circ #3" quasePerfeito/>
      <Circulo texto="Circ #4"/>
    </div>
  )
}
