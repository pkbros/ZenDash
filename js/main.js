// ZenDash Main Script

// Generic function to load a coponent inot a container
function loadComponent(path, containerId){
    fetch(path) // uses fetch API to request componet file from path
    .then(response => {
        if(!response.ok){
            throw new Error(`Failed to load ${path}: ${response}`);
        }
        return response.text();
    })
    .then(html => {
        document.getElementById(containerId).innerHTML = html;
    })
    .catch(error => {
        console.error("Error loading component: ", error);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    loadComponent("../components/timer.html", "timer-widget");
});