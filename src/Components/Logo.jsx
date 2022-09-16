import React from 'react'

const Logo = ({p}) => {
  return (
    <div>
           <p className='bienvenido'>{p}</p>
              <div className="title">
                <div className="title__wrap">
                  <span className='title__icon'> 🍰</span>
                  <h1 className='title__h1'>Happy Cake</h1>
                </div>
                <h2 className='title__subtitle text-info'>El lugar de los pasteles felices</h2>
              </div>
    </div>
  )
}

export default Logo