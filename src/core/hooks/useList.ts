import { useState, useEffect } from 'react'

type ListHookFetchItemsCallback<T> = (setItems: (items: T[]) => void) => void
type ListHookResult<T> = [T[], T | undefined, (item: T) => void]

function useList<T>(
    fetchItems: ListHookFetchItemsCallback<T>
): ListHookResult<T> {
    const [items, setItems] = useState<T[]>([])
    const [activeItem, setActiveItem] = useState<T>()

    useEffect(() => fetchItems(setItems), [])

    useEffect(
        function setFirstItemActive() {
            setActiveItem(items[0])
        },
        [items]
    )

    return [items, activeItem, setActiveItem]
}

export default useList
