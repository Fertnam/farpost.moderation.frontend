import React from 'react'
import ListItem from './Item'
import styles from './styles.module.scss'

type Props<T> = {
    items: T[]
    renderItem: (item: T) => React.ReactNode
    onListItemClick: (item: T) => void
    activeItem?: T
}

function List<T>(props: Props<T>) {
    return (
        <div className={styles.list}>
            {props.items.map((item, index) => (
                <div onClick={() => props.onListItemClick(item)} key={index}>
                    <ListItem active={item === props.activeItem}>
                        {props.renderItem(item)}
                    </ListItem>
                </div>
            ))}
        </div>
    )
}

export default List
