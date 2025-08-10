
export const countNumberDecimal = (number: number) => {
    const str = number.toString()
    const decimalIndex = str.indexOf('.')
    if (decimalIndex === -1) return 0
    return str.length - decimalIndex - 1
}