//Exemplo do site: https://javascript.info/call-apply-decorators

import Log from './Log.js';

const squared = value => {
    let result = Math.pow(value, 2);
    Log(`Squared of ${value}: ${result}`);
    return result;
}

const cachingDecorator = func => {
    let cache = new Map();

    return key => {
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func(key);
        cache.set(key, result);
        return result;
    }
}

const localSample = () => {
    const squaredCached = cachingDecorator(squared);
    Log(squaredCached(1));
    Log(`Again: ${squaredCached(1)}`);
    Log(squaredCached(2));
    Log(`Again: ${squaredCached(2)}`);
}

localSample();