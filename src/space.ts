export namespace Space {
  export class Vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }

  export const lerp2 = (start: Vector2, end: Vector2, progress: number): Vector2 => {
    return new Vector2(
      start.x + ((end.x - start.x) * progress),
      start.y + ((end.y - start.y) * progress),
    )
  }
}