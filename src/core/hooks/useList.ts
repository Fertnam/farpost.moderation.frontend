import { useState, useEffect } from 'react'

type ListHookResult<T> = [T[], T | undefined, (item: T) => void]

function useList<T>(): ListHookResult<T> {
    const [items, setItems] = useState<T[]>([])
    const [activeItem, setActiveItem] = useState<T>()

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
        function setFirstItemActive() {
            setActiveItem(items[0])
        },
        [items]
    )

    return [items, activeItem, setActiveItem]
}

export default useList
