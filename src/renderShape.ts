import { Shape, ShapeRow, ShapeCol } from "./shapes"

export default (shape: Shape) => {
  const colToDOM = (col: ShapeCol) => {
    const colElement = document.createElement("div")
    switch (col) {
      case 0:
        colElement.classList.add("shape__col")
        return colElement
      case 1:
        colElement.classList.add("shape__col", "shape__col--filled")
        return colElement
    }
  }

  const rowToDOM = (row: ShapeRow) => {
    const dom = row.map(colToDOM).reduce((prev, curr) => {
      prev.appendChild(curr)
      return prev
    }, document.createElement("div"))
    dom.classList.add('shape__row')
    return dom
  }

  const fragment = shape.map(rowToDOM).reduce((prev, curr) => {
    prev.appendChild(curr)
    return prev
  }, document.createDocumentFragment())

  const wrapper = document.createElement("div")
  wrapper.classList.add('shape')
  wrapper.appendChild(fragment)
  return wrapper
}
