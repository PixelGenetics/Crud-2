import { useState } from 'react'
import './App.css'
import CrudCreate from './Card/CrudCreate'
import CrudGet from './Card/CrudGet'
import useCrud from './Components/useCrud'

function App() {

  return (
    <>
      <CrudCreate />
      <CrudGet />
      {/* createUsers={createUsers} */}
    </>
  )
}

export default App
