import { useCallback, useEffect, useState } from 'react'

type ModerationTapeHookResult<T> = {
    items: T[]
    activeItem: T | undefined
    setActiveItem: (item: T) => void
}

function useModerationTape<T>(): ModerationTapeHookResult<T> {
    const [items, setItems] = useState<T[]>([])
    const [activeItem, setActiveItemRaw] = useState<T>()

    const setActiveItem = useCallback((item: T) => setActiveItemRaw(item), [])

    useEffect(function fetchItems() {
        setItems([
            {
                id: 1234567,
                publishDate: 1234567,
                publishDateString: '08:46, сегодня',
                ownerId: 1234567,
                ownerLogin: 'Fertnam',
                bulletinSubject: 'UI/UX Designer (Владивосток)',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
            {
                id: 324234,
                publishDate: 2342343,
                publishDateString: '12:46, сегодня',
                ownerId: 44334,
                ownerLogin: 'Sashok',
                bulletinSubject: 'Web-программист',
                bulletinText: 'Текст объявления ...',
                bulletinImagees: [],
            },
        ] as unknown as T[])
    }, [])

    useEffect(
        function focusToFirstItem() {
            setActiveItem(items[0])
        },
        [items]
    )

    return {
        items,
        activeItem,
        setActiveItem,
    }
}

export default useModerationTape
