{
  //

  // rectangle type
  type Rectangle = {
    name: string
    height: number
    width: number
  }

  // circle type
  type Circle = {
    name: string
    radius: number
  }

  type Shape = Rectangle | Circle

  const calculateShapeArea = (shape: Shape): number => {
    let area: number = 0
    if ('radius' in shape) {
      // in operator
      area = Math.PI * shape.radius * shape.radius
    } else if ('height' in shape && 'width' in shape) {
      // in operator
      area = shape.height * shape.width
    }
    return parseFloat(area.toFixed(2))
  }

  const shape1 = {
    name: 'circle',
    radius: 5,
  }

  const shape2 = {
    name: 'rectangle',
    width: 4,
    height: 6,
  }

  const circleArea = calculateShapeArea(shape1)
  const rectangleArea = calculateShapeArea(shape2)

  console.log(circleArea, rectangleArea)

  //
}
