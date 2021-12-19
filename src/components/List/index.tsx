import React, { useCallback } from 'react'
import ListItem from './Item'
import styles from './styles.module.scss'

type Props<T> = {
    items: T[]
    activeItem: T | undefined
    renderItem: (item: T) => React.ReactNode
    onListItemClick: (item: T) => void
}

function List<T>(props: Props<T>) {
    const onListItemClick = useCallback(
        (item: T) => () => props.onListItemClick(item),
        [props.onListItemClick]
    )

    return (
        <div className={styles.list}>
            {props.items.map((item, index) => (
                <ListItem
                    active={item === props.activeItem}
                    onClick={onListItemClick(item)}
                    key={index}
                >
                    {props.renderItem(item)}
                </ListItem>
            ))}
        </div>
    )
}

export default List
