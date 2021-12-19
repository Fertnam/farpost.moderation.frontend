import React from 'react'
import ModerationTapeList from './components/List'
import ModerationTapeManual from './components/Manual'
import styles from './styles.module.scss'

function ModerationTape() {
    return (
        <div className={styles.moderationTape}>
            <ModerationTapeList />
            <ModerationTapeManual />
        </div>
    )
}

export default ModerationTape
