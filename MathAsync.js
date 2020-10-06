import Log from './Log.js';

export const addAsync = async (x, y) => x + y;
export const subtractAsync = async (x, y) => x - y;
export const multplyAsync = async (x, y) => x * y;
export const dividAsync = async (x, y) => x / y;

const localSample = () => {
    Log('Testes assíncronos');

    let logPromise = () => {
        addAsync(2, 1)
            .then(r => subtractAsync(r, 1))
            .then(r => multplyAsync(r, 2))
            .then(r => dividAsync(r, 2))
            .then(r => Log('Com promessas: ((((2 + 1) - 1) * 2) / 2) = ' + r));
    }

    let logAsync = async () => {
        let value = await dividAsync(await multplyAsync(await subtractAsync(await addAsync(2, 1), 1), 2), 2);
        Log('Com assinc/await: ((((2 + 1) - 1) * 2) / 2) = ' + value);
    };

    logPromise();
    logAsync();
}

localSample();
