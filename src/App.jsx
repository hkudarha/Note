import React from 'react'
import Sidebar from './components/Sidebar'
import Note from './components/Node'
import { NotesProvider } from './components/Store'

const App = () => {
  return (
    <NotesProvider>
    <div className='flex p-5 gap-5'>
      <Sidebar></Sidebar>
      <Note></Note>
    </div>
    </NotesProvider>
  )
}

export default App
