const fs = require('fs'),
    { promisify } = require('util');

fs.stat('.', (err, data) => {
    //console.log(err, data);
});

fsStat = promisify(fs.stat);

const asyncFuncA = async (file) => {
    const info = await fsStat(file);
    return info;
}

main = async (file) => {
    fsStat(file).then((data) => console.log('promisify called:', data)).catch((err) => console.log(err));
    //console.log('await promisify call:', await fsStat(file));
    console.log('async call', await asyncFuncA(file));
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, data) => {
            if(err) reject(err);
            else resolve(data);
        });
    });
}

main('.').then((data) => console.log('called:', data)).catch((err) => console.log('failed:', err));
