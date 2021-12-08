const fs = require("fs");
const process = require("process");
const axios = require("axios");

/** read file at path and print it out. */
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

async function webCat(url) {
	try {
		let resp = await axios.get(url);
		console.log(resp.data);
	} catch (err) {
		console.error(`Error fetching ${url}: ${err}`);
		process.exit(1);
	}
}

let path = process.argv[2];
if (path.slice(0, 4) === "http") {
	webCat(path);
} else {
	cat(path);
}
