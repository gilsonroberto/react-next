import React from 'react'

export default function Evento() {
  let contador = 0

  function incrementar () {
    console.log(contador++)
  }

  return (
    <div className={`
      flex justify-center items-center
      h-72 w-72 bg-green-600 text-4xl
    `}
      onClick={incrementar}
    >
      Evento
    </div>
  )
}
