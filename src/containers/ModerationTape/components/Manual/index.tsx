import React from 'react'
import ModerationTapeManualItem, { Colors } from '../ManualItem'
import styles from './styles.module.scss'

function ModerationTapeManual() {
    return (
        <div className={styles.manual}>
            <ModerationTapeManualItem
                action="Одобрить"
                hotKey="Пробел"
                color={Colors.GREEN}
            />

            <ModerationTapeManualItem
                action="Отклонить"
                hotKey="Del"
                color={Colors.ORANGE}
            />

            <ModerationTapeManualItem
                action="Эскалация"
                hotKey="Shift+Enter"
                color={Colors.BLUE}
            />

            <ModerationTapeManualItem action="Сохранить" hotKey="F7" />
        </div>
    )
}

export default ModerationTapeManual
