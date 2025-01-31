# Discussion

## Solutions Considered
1. **Reading the entire file into memory (Not efficient)**
   - This would require too much RAM for a 1TB file.
   - It would slow down the system significantly.

2. **Streaming and filtering line by line (Efficient)**
   - We used Node.js `readline` module to read the file **line by line**.
   - This keeps memory usage low and improves efficiency.

## Final Solution Summary
- The script takes a date (`YYYY-MM-DD`) as an argument.
- It efficiently **extracts logs for that specific date** from the 1TB log file.
- The logs are saved in the `output/` folder as `output_YYYY-MM-DD.txt`.

Run the script  inside directory tech-campus-recruitment-2025 :-
node src/extract_logs.js 2024-12-01
