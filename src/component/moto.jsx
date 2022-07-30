import React from 'react'

const moto = (mikanik,chaine) => {
     console.log(mikanik);
  return (
    <div>
      {
       mikanik.map((moto) => (
        <h1>{moto.brand}</h1>
       ))
      }
    </div>
  )
}

export default moto