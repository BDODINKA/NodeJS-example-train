const readline = require('readline');
const {stdin: input, stdout: output} = require('process');

const rl = readline.createInterface({input, output});

rl.write('100 10 12 15')

let total = 0;

rl.on('line', (data) => {
    const variables = data.split(' ')

    if (variables[1] < variables[3]) {
        const res = variables
        total = +res[0] + ((res[3] - res[1]) * res[2])
    } else {
        total = +variables[0]
    }
    rl.close();
});

rl.on("close", () => {
    console.log(total);
});


