// function showAlert(){
//     document.getElementById("alertBox").style.display = "block";
// }

function showAlert(alertId) {
    // Show success message
    document.getElementById(alertId).style.display = "block";

    // Save progress data
    const progressData = [
        { exercise: "Hip External Rotator Stretch", date: "Nov 9, 2024", status: "✅ Checked" },
        { exercise: "Ankle Dorsiflexion", date: "Nov 9, 2024", status: "✅ Checked" }
    ];

    // Store in localStorage
    localStorage.setItem("exerciseProgress", JSON.stringify(progressData));
}