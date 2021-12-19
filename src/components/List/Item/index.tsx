import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

type Props = {
    active: boolean
    onClick: () => void
    children: React.ReactNode
}

function ListItem(props: Props) {
    return (
        <div
            className={classNames([
                styles.listItem,
                { [styles.active]: props.active },
            ])}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    )
}

export default ListItem
