let counts = [];

for (let i = 0; i < 10; i++) {
    let startTime = (new Date()).getTime();
    let count = 1;
    for (startTime; startTime + 1 >= (new Date()).getTime(); count++) {}
    counts.push(count);
}

function compare(a, b) {
    switch(true) {
        case a > b:
            return 1;
        case a < b:
            return -1;
        default:
            return 0;
    }
}

console.log(counts.sort(compare));