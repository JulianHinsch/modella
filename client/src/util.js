export const toMs = (val, unit) => {
    switch(unit) {
        case 'millisecond':
            return val;
        case 'second':
            return 1000 * val;
        case 'minute':
            return 60 * 1000 * val;
        case 'hour':
            return 60 * 60 * 1000 * val;
        case 'day':
            return 24 * 60 * 60 * 1000 * val;
        case 'year':
            return 365 * 24 * 60 * 60 * 1000 * val;
    }
}