import React, {useState} from 'react'
import boxes from './components/boxes'
import Box from './components/Box'

export default function App(props) {
const [boxess, setBoxess] = useState(boxes)



  const box = boxess.map(boxess => <Box on={boxess.on} />)
   return (
    <main className='grid'>
        {box}
    </main>
)
}