function arrayToTree() {
    let root = []
    let arrayList = [
        { id: 1, parent: null },
        { id: 2, parent: 1 },
        { id: 3, parent: 1 },
        { id: 4, parent: 2 },
        { id: 5, parent: 3 }
    ]
    let arrayMap = new Map()
    arrayList.forEach(item => {
        arrayMap.set(item.id, item)
    })
    arrayMap.forEach(item => {
        if (item.parent === null) {
            root.push(item)
        } else {
            let parent = arrayMap.get(item.parent)
            if (parent.children) {
                parent.children.push(item)
            } else {
                parent.children = [item]
            }
        }
    })
    return root
}
console.log(arrayToTree())