import { init, getTTVC } from '@dropbox/ttvc';

// Call this as early in pageload as possible to setup instrumentation.
init({
    debug: false,
    idleTimeout: 2000,
    networkTimeout: 0,
});

// Reports the last visible change for each navigation that
// occurs during the life of this document.
const unsubscribe = getTTVC((measurement) => {
    window.TTVC = measurement;

    console.log('Measurement collected at:', performance.now());

    console.log('TTVC:', measurement);

    performance.mark("dbx-ttvc", {
        startTime: measurement.duration,
    })

    // report marks to measure individual content injection / load
    console.log('Marks:', performance.getEntriesByType('mark'));
});
