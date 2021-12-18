import { useEffect, useState } from 'react'

type FetchItemsCallback<T> = (setItems: (items: T[]) => void) => void
type ModerationTapeHookResult<T> = [T[], T | undefined, (item: T) => void]

function useModerationTape<T>(
    fetchItems: FetchItemsCallback<T>
): ModerationTapeHookResult<T> {
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

export default useModerationTape
