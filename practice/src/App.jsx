import React from 'react'
import Product from './Product'

function App() {
  return (
    <div className="h-screen w-full bg-zinc-900 text-white">
      <Product age = "22" data = {{age: 22, name: "shivam"}} />
    </div>
  )
}


export default App

// comopnnet is a function which will return a jsx
//  Jsx is a html-like syntax which have some superpowers that html does not posses
