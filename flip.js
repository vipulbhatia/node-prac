const matrix = [[0,1,2],
              [3,4,5],
              [6,7,8]];

for(let j=2; j>=0; j--) {
	console.log();
	for(let i=0; i<3; i++) {
		process.stdout.write(`${matrix[i][j]} `);
	}
}
