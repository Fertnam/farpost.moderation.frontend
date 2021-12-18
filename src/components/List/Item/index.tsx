import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

type Props = {
    active: boolean
    children: React.ReactNode
}

function ListItem(props: Props) {
    return (
        <div
            className={classNames([
                styles.listItem,
                {
                    [styles.active]: props.active,
                },
            ])}
        >
            {props.children}
        </div>
    )
}

export default ListItem
