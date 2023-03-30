enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
  }
  
let myColor: Color = Color.Green;

declare function getColor(color: Color): void

getColor(colors.red)