export type Circle = {
  kind: "circle"
  radius: number
}; // define what kind of shape it is using kind:, and give it the element it needs to
  // get its area, which is radius.

export type Rectangle = {
  kind: "rectangle";
  height: number;
  width: number;
}; // define what kind of shape it is using kind: and define the parameteres needed
  // for rectangle it is length and width

export type Square = {
  kind: "square";
  sideLength: number;
}; // define what kind of shape it is using kind: and define the parameters needed
  // for square it is sideLength

export type Shape = Circle | Rectangle | Square;

export function calculateArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2
  } //if the shape is a circle, then use piR^2 to calculate its area

  if (shape.kind === "rectangle") {
    return shape.height * shape.width
  } // if the shape is a rectangle, then use length * width.

  if (shape.kind === "square") {
    return shape.sideLength ** 2
  } // if the shape is a square, then use sideLength^2, alternativaley, couldve done
    // sideLength * sideLength.
  return 0;
}
