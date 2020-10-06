import formatDate from './DateFormat.js';
import Log from './Log.js';

export const log = (date, tag, message) => {
    Log(`${tag.toUpperCase()} [${formatDate(date)}]: [${message}]`);
}

const logNow = log.bind(null, new Date());
const logInfo = logNow.bind(null, "info");
const logDebug = logNow.bind(null, 'debug');
const logWarning = logNow.bind(null, 'warning');
const logError = logNow.bind(null, 'error');


const localSample = () => {
    logInfo("Hello!");
    logDebug("I am the Doctor...");
    logWarning("...basically...");
    logError("RUN!!!!");
}

localSample();