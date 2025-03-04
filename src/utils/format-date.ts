const weekdays = [
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
]

export function getDayOfTheWeek(input: Date | string) {
    let date;
    if (typeof input === 'string') {
        date = new Date(input)
    } else {
        date = input;
    }

    return weekdays[date.getDay()]
}