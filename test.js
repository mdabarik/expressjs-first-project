{
    var calculateShapeArea = function (shape) {
        var area = 0;
        if ("radius" in shape) { // in operator
            area = Math.PI * shape.radius * shape.radius;
        }
        else if ("height" in shape && "width" in shape) { // in operator
            area = shape.height * shape.width;
        }
        return parseFloat(area.toFixed(2));
    };
    var shape1 = {
        name: "circle",
        radius: 5
    };
    var shape2 = {
        name: "rectangle",
        width: 4,
        height: 6
    };
    var circleArea = calculateShapeArea(shape1);
    var rectangleArea = calculateShapeArea(shape2);
    console.log(circleArea, rectangleArea);
    // 
}
