import Log from './Log.js';

const formatDate = (date, separator = '/') => {
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${day}${separator}${month}${separator}${year}`;
}

const localSample = () => {
    Log(formatDate(new Date()));
    Log(formatDate(new Date(), '-'));
}

localSample();

export default formatDate;