{
  type TCircle = {
    shape: "circle";
    radius: number;
  };
  type TRectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type shapeType = TCircle | TRectangle;

  const calculateShapeArea = (shape: shapeType): number => {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    } else {
      throw new Error("worng shape");
    }
  };
}
