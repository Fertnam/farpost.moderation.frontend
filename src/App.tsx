import React from 'react'
import Container from './components/Container/Container'
import ModerationTape from './components/ModerationTape/ModerationTape'
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.app}>
            <Container>
                <ModerationTape />
            </Container>
        </div>
    )
}

export default App
