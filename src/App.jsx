import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <h1>Vampire Survivors Project</h1>
                <div className="game-container">
                    {/* Game will go here */}
                </div>
            </div>
        </>
    )
}

export default App
