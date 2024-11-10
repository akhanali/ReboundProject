document.addEventListener("DOMContentLoaded", () => {
    // Retrieve progress data from localStorage
    const progressData = JSON.parse(localStorage.getItem("exerciseProgress"));
    const tableBody = document.getElementById("progress-table-body");

    // Check if there's progress data and a table to populate
    if (progressData && tableBody) {
        // Clear any existing rows in the table
        tableBody.innerHTML = "";

        // Loop through each exercise in progressData to create table rows
        progressData.forEach(item => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.exercise}</td>
                <td>2 sets</td> <!-- Target repetitions, kept static -->
                <td>${item.date}</td>
                <td>${item.status}</td>
            `;
            tableBody.appendChild(row);
        });

        // Optional: remove progress data from localStorage after loading
        localStorage.removeItem("exerciseProgress");
    }
});