export const format = (number) => {
    const config = {
        style: 'decimal',
        minimumIntegerDigits: 1,
        maximumFractionDigits: 1,
        notation: 'compact'
    }

    return Intl.NumberFormat(undefined, config).format(number);
}