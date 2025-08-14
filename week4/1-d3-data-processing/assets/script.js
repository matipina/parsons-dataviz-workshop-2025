document.addEventListener('DOMContentLoaded', () => {
    const loadCsvBtn = document.getElementById('load-csv-btn');
    const groupDataBtn = document.getElementById('group-data-btn');
    const rollupDataBtn = document.getElementById('rollup-data-btn');
    const parseTimeBtn = document.getElementById('parse-time-btn');

    const csvOutput = document.getElementById('csv-output');
    const groupOutput = document.getElementById('group-output');
    const rollupOutput = document.getElementById('rollup-output');
    const timeOutput = document.getElementById('time-output');

    let rawData = [];

    // 1. Load CSV Data
    loadCsvBtn.addEventListener('click', async () => {
        try {
            const data = await d3.csv('data.csv');
            rawData = data;
            csvOutput.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            csvOutput.textContent = `Error loading data: ${error.message}`;
        }
    });

    // 2. Group Data
    groupDataBtn.addEventListener('click', () => {
        if (rawData.length === 0) {
            groupOutput.textContent = 'Please load the data first.';
            return;
        }
        const groupedData = d3.group(rawData, d => d.Borough);
        groupOutput.textContent = mapToJson(groupedData);
    });

    // 3. Rollup Data
    rollupDataBtn.addEventListener('click', () => {
        if (rawData.length === 0) {
            rollupOutput.textContent = 'Please load the data first.';
            return;
        }
        const rolledUpData = d3.rollup(rawData, v => v.length, d => d.Borough);
        rollupOutput.textContent = mapToJson(rolledUpData);
    });

    // 4. Parse Time
    parseTimeBtn.addEventListener('click', () => {
        const dateString = "08/06/2025";
        const parseTime = d3.timeParse("%m/%d/%Y");
        const dateObject = parseTime(dateString);
        
        timeOutput.textContent = `Original String: "${dateString}"\n\n`;
        timeOutput.textContent += `Parsed Date Object: ${dateObject}\n\n`;
        timeOutput.textContent += `getFullYear(): ${dateObject.getFullYear()}\n`;
        timeOutput.textContent += `getMonth(): ${dateObject.getMonth()} (0-indexed)\n`;
        timeOutput.textContent += `getDate(): ${dateObject.getDate()}`;
    });

    // Helper function to convert Map to JSON for display
    function mapToJson(map) {
        return JSON.stringify(Array.from(map.entries()), (key, value) => {
            if (value instanceof Map) {
                return Object.fromEntries(value);
            }
            return value;
        }, 2);
    }
});
