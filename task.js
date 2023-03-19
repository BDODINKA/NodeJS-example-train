const readline = require('readline');
const {stdin: input, stdout: output} = require('process');

const rl = readline.createInterface({input, output});

rl.write('100 10 12 15')

rl.on('line', (data) => {
    const variables = data.split(' ').map((el) => +el)

    if (variables[1] < variables[3]) {
        const res = variables
        console.log(res[0] + (res[3] - res[1]) * res[2])
        process.exit(0);
    } else {
        console.log(variables[0])
        process.exit(0);
    }
    rl.close();
});

