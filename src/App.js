import React, {useState} from 'react'
import boxes from './components/boxes'
import Box from './components/Box'

export default function App(props) {
const [boxess, setBoxess] = useState(boxes)


function toggle(id) {
    setBoxess(prevNum => {
        const newSquares = []
        for(let i = 0; i < prevNum.length; i++) {
            const currentSquare = prevNum[i]
            if(currentSquare.id === id) {
                const updatedSquare = {
                    ...currentSquare,
                    on: !currentSquare.on
                }
                newSquares.push(updatedSquare)
            } else {
                newSquares.push(currentSquare)
            }
        }
        return newSquares
    })
}


  const box = boxess.map(boxess =>
     <Box 
     key={boxess.id}
     id={boxess.id}
     on={boxess.on}
     handleClick={toggle}
     />)

   return (
    <main className='grid'>
        {box}
    </main>
)
}