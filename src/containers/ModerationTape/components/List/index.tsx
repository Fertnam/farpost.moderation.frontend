import React from 'react'

type Props<T> = {
    items: T[]
    renderItem: (item: T) => React.ReactNode
}

function ModerationTapeList<T extends any>(props: Props<T>) {
    return <div>{props.items.map(props.renderItem)}</div>
}

export default ModerationTapeList
