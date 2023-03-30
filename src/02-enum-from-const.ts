const colors = {
    red: 'red',
    green: 'green',
    blue: 'blue'
}


type Colors = typeof colors
type ColorKey = keyof Colors
type ColorValue = (typeof colors)[ColorKey]

declare function getColor(color: ColorKey | ColorValue): void

getColor(colors.red)