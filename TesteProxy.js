import Log from './Log.js';

const localSample = () => {
    let doctor = {
        regeneration: "9º",
        catchphrase: "Fantanstic!"
    }

    let proxy = new Proxy(doctor, {
        get(target, prop) {
            if (prop in target) {
                if (prop == 'catchphrase') {
                    return target[prop] + ' And have a fantastic life!!!!';
                }
                return target[prop];
            }
            return undefined;
        },

        set(target, prop) {
            return false; //Impede que as propriedades sejam modificadas
        }
    });

    Log(proxy.regeneration);
    Log(proxy.catchphrase);

    try {
        proxy.catchphrase = 'Geronimooooooo!';
    } catch (e) {
        Log(e);
    }
}

localSample();