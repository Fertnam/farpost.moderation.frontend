import React from 'react'
import Container from 'components/Container'
import ModerationTape from 'containers/ModerationTape'
import styles from './styles.module.scss'

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
