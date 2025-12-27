
import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'
// import { add, diff, divide as div, multi } from './calculation/math/math'
// import { calculateTax } from './calculation/tax/tax'

function App() {
  const bottlesPromise = fetch('./bottles.json')
  .then(res => res.json())
  
  // const sum = add(3,3)
  // console.log(sum)
  // const sub = diff(4,4)
  // console.log(sub)
  // const multiply = multi(4,4)
  // console.log(multiply)
  // const divide = div(4,4)
  // console.log(divide)
  // const a = calculateTax
  // console.log(a)
  return (
    <>
      
      <h1>Vite + React</h1>
      <Suspense fallback={<h1>Bottle </h1>}>
        <Bottles bottlesPromise={bottlesPromise}>

        </Bottles>
      </Suspense>
      
    </>
  )
}

export default App
