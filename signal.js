export function signal(value) {

    let currentValue = value;

    const subscribers = new Set();

    const notify = (newValue) => {
        for (const subscriber of subscribers) {
            subscriber();
        }
    }

    const get = () => currentValue;
    
    get.set = (newValue) => {
        currentValue = newValue;
        notify();
    }

    get.update = (updater) => {
        currentValue = updater(currentValue);
        notify();
    }

    get.subscribe = (subscriber) => {
        subscribers.add(subscriber);
    }

    return get;
}


export function effect(effectFn, dependencies) {
    
    for (const dep of dependencies) {
        dep.subscribe(() => {
            effectFn();
        });
    }

    effectFn();
}