const fs = require("fs");
const readline = require("readline");
const path = require("path");
const logFile = path.join(__dirname, "../logs_2024.log");


async function extractLogs(logFile, date) {
    const outputDir = "output";
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const outputFile = path.join(outputDir, `output_${date}.txt`);
    const readStream = fs.createReadStream(logFile);
    const writeStream = fs.createWriteStream(outputFile);
    
    const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity,
    });

    console.log(`Extracting logs for ${date}...`);
    
    for await (const line of rl) {
        if (line.startsWith(date)) {
            writeStream.write(line + "\n");
        }
    }

    writeStream.end();
    console.log(`Logs saved to ${outputFile}`);
}

// Get the date argument from command line
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log("Usage: node extract_logs.js YYYY-MM-DD");
    process.exit(1);
}

// const logFile = "../logs_2024.log";

extractLogs(logFile, args[0]);
