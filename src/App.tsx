import './style.css'
import IMG from './sydney.png'
import LOGO from './svg.svg'

import { ClickCounter } from './ClickCounter'

export function App() {
  return (
    <>
      <h1>
        Edited My connect - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMG} alt="sydney" width="300px" height="450px" />
      <img src={LOGO} alt="icon" width="150px" height="150px" />
      <ClickCounter />
    </>
  )
}
