document.addEventListener('DOMContentLoaded', () => {
    // --- Arrow Functions ---
    const arrowFuncBtn = document.getElementById('arrow-func-btn');
    const arrowFuncOutput = document.getElementById('arrow-func-output');
    arrowFuncBtn.addEventListener('click', () => {
        const numbers = [1, 2, 3, 4];

        // Traditional function expression
        const doubled1 = numbers.map(function(x) {
            return x * 2;
        });

        // Arrow function
        const doubled2 = numbers.map(x => x * 2);

        arrowFuncOutput.textContent = `Original Array: [${numbers.join(', ')}]\n\n`;
        arrowFuncOutput.textContent += `Using traditional function: [${doubled1.join(', ')}]\n`;
        arrowFuncOutput.textContent += `Using arrow function: [${doubled2.join(', ')}]\n\n`;
        arrowFuncOutput.textContent += `Note how the arrow function is more concise.`;
    });

    // --- Map Objects ---
    const mapObjBtn = document.getElementById('map-obj-btn');
    const mapObjOutput = document.getElementById('map-obj-output');
    mapObjBtn.addEventListener('click', () => {
        const myMap = new Map();
        myMap.set('name', 'John');
        myMap.set('age', 30);
        myMap.set(true, 'isLoggedIn');

        mapObjOutput.textContent = `// Creating and setting values\n`;
        mapObjOutput.textContent += `const myMap = new Map();\n`;
        mapObjOutput.textContent += `myMap.set('name', 'John');\n`;
        mapObjOutput.textContent += `myMap.set('age', 30);\n`;
        mapObjOutput.textContent += `myMap.set(true, 'isLoggedIn');\n\n`;

        mapObjOutput.textContent += `// Getting values\n`;
        mapObjOutput.textContent += `myMap.get('name'): ${myMap.get('name')}\n`;
        mapObjOutput.textContent += `myMap.get(true): ${myMap.get(true)}\n\n`;

        mapObjOutput.textContent += `// Checking size\n`;
        mapObjOutput.textContent += `myMap.size: ${myMap.size}\n\n`;
        
        mapObjOutput.textContent += `// D3 often returns Maps that need to be converted for display:\n`;
        mapObjOutput.textContent += `JSON.stringify(Array.from(myMap.entries())): \n${JSON.stringify(Array.from(myMap.entries()), null, 2)}`;
    });

    // --- Async/Await ---
    const asyncAwaitBtn = document.getElementById('async-await-btn');
    const asyncAwaitOutput = document.getElementById('async-await-output');
    asyncAwaitBtn.addEventListener('click', async () => {
        asyncAwaitOutput.textContent = 'Starting asynchronous operation...\n';

        // A function that returns a Promise that resolves after a delay
        const fakeDataFetch = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({ data: 'Here is your fetched data!' });
                }, 1500); // Simulate a 1.5 second network delay
            });
        };

        try {
            asyncAwaitOutput.textContent += 'Awaiting promise...\n';
            const result = await fakeDataFetch();
            asyncAwaitOutput.textContent += `Promise resolved!\n`;
            asyncAwaitOutput.textContent += `Result: ${result.data}`;
        } catch (error) {
            asyncAwaitOutput.textContent += `An error occurred: ${error.message}`;
        }
    });
});
