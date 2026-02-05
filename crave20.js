// AJAX : promises : It is used to handle asynchronous operations in JavaScript. A promise represents a value that may be available now, in the future, or never. It allows you to attach callbacks for success (.then) and failure (.catch) of an asynchronous operation.

// Example of using Promises with AJAX (using Fetch API)
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject(new Error("Network response was not ok"));
                } else {
                    return response.json();
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Usage
fetchData('https://archpoint.onrender.com/api/team')
    .then(data => {
        console.log("Fetched data:", data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
// Example using async/await syntax , use of await : it makes js wait for the promise to resolve or reject , just like a setInterval ? = no , it just pauses the execution of the async function until the promise is settled (resolved or rejected) .
async function fetchDataAsync(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log("Fetched data (async/await):", data);
    } catch (error) {
        console.error("Error fetching data (async/await):", error);
    }
}

fetchDataAsync('https://archpoint.onrender.com/api/team');

// In this example, fetchData function returns a promise that resolves with the fetched data or rejects with an error. The usage demonstrates how to handle the promise using .then and .catch methods, as well as using async/await syntax for cleaner asynchronous code.