const express = require('express');

const app = express();

app.listen(8000, () => {
	console.log(`Express is running on ${8000} port!\n`);
});
