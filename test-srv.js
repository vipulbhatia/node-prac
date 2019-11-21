const express = require('express'),
    app = express();

plus = (a) => {
    return a++;
}

app.get('/', async (req, res, next) => {
    let a = 1;
    a = plus(a);
    res.status(200).json({ result: a });
});

app.listen(8000, () => console.log("running"));
