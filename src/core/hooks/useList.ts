import { useState, useEffect } from 'react'

type ListHookResult<T> = [
    T[],
    (items: T[]) => void,
    T | undefined,
    (item: T) => void
]

function useList<T>(): ListHookResult<T> {
    const [items, setItems] = useState<T[]>([])
    const [activeItem, setActiveItem] = useState<T>()

    useEffect(
        function setFirstItemActive() {
            setActiveItem(items[0])
        },
        [items]
    )

    return [items, setItems, activeItem, setActiveItem]
}

export default useList
