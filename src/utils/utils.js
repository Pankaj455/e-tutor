import { CATEGORY_ICON_MAP } from "./constant";

export const format = (number) => {
    const config = {
        style: 'decimal',
        minimumIntegerDigits: 1,
        maximumFractionDigits: 1,
        notation: 'compact'
    }

    return Intl.NumberFormat(undefined, config).format(number);
}

export const getCategoryIcon = (category) => {
    return CATEGORY_ICON_MAP[category];
}