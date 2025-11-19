document.addEventListener("DOMContentLoaded", function () {

    const profileName = document.getElementById("profileName");
    const profileRole = document.getElementById("profileRole");
    const profileImage = document.getElementById("profileImage");
    const profileCard = document.getElementById("profileCard");

    const updateNameBtn = document.getElementById("updateNameBtn");
    const updateRoleBtn = document.getElementById("updateRoleBtn");
    const changeImageBtn = document.getElementById("changeImageBtn");
    const toggleStatusBtn = document.getElementById("toggleStatusBtn");

    function loadSaved() {
        if (localStorage.getItem("savedName")) {
            profileName.textContent = localStorage.getItem("savedName");
        }
        if (localStorage.getItem("savedRole")) {
            profileRole.textContent = localStorage.getItem("savedRole");
        }
        if (localStorage.getItem("savedImage")) {
            profileImage.src = localStorage.getItem("savedImage");
        }
        if (localStorage.getItem("savedStatus") === "active") {
            profileCard.classList.add("active-status");
        }
    }

    loadSaved();

    updateNameBtn.addEventListener("click", function () {
        const newName = prompt("Enter new name:");
        if (newName) {
            profileName.textContent = newName;
            localStorage.setItem("savedName", newName);
        }
    });

    updateRoleBtn.addEventListener("click", function () {
        const newRole = prompt("Enter new role:");
        if (newRole) {
            profileRole.textContent = newRole;
            localStorage.setItem("savedRole", newRole);
        }
    });

    changeImageBtn.addEventListener("click", function () {
        const newImage = prompt("Paste image URL:");
        if (newImage) {
            profileImage.src = newImage;
            localStorage.setItem("savedImage", newImage);
        }
    });

    toggleStatusBtn.addEventListener("click", function () {
        profileCard.classList.toggle("active-status");

        if (profileCard.classList.contains("active-status")) {
            localStorage.setItem("savedStatus", "active");
        } else {
            localStorage.setItem("savedStatus", "inactive");
        }
    });

});
