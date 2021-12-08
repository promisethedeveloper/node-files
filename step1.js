const fs = require("fs");
const process = require("process");

const cat = (path) => {
	fs.readFile(path, "utf-8", (err, data) => {
		if (err) {
			console.log(`Error reading ${path}: ${err}`);
			process.exit(1);
		}
		console.log("DATA...", data);
	});
};

cat(process.argv[2]);
