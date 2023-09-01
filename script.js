document.addEventListener("DOMContentLoaded", () => {
    const userCard = document.querySelector(".user-card");
    const avatarElement = document.querySelector(".user-avatar img");
    const usernameElement = document.getElementById("username");
    const fullNameElement = document.getElementById("fullName");
    const genderElement = document.getElementById("gender");
    const dateOfBirthElement = document.getElementById("dateOfBirth");
    const addressElement = document.getElementById("address");
    const emailElement = document.getElementById("email");
    const fetchButton = document.getElementById("fetchUser");
    const darkModeButton = document.getElementById("toggleDarkMode");
    const body = document.body;

    const fetchUserData = () => {
        usernameElement.textContent = "Loading...";
        fullNameElement.textContent = "Loading...";
        genderElement.textContent = "Loading...";
        dateOfBirthElement.textContent = "Loading...";
        addressElement.textContent = "Loading...";
        emailElement.textContent = "Loading...";

        fetch("https://randomuser.me/api/")
            .then((response) => response.json())
            .then((data) => {
                const user = data.results[0];
                const profilePictureUrl = user.picture.large;
                avatarElement.src = profilePictureUrl;
                usernameElement.textContent = user.login.username;
                fullNameElement.textContent = `${user.name.first} ${user.name.last}`;
                genderElement.textContent = user.gender;
                dateOfBirthElement.textContent = user.dob.date;
                addressElement.textContent = `${user.location.street.name}, ${user.location.city}`;
                emailElement.textContent = user.email;
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
            
    };
    fetchUserData();
    fetchButton.addEventListener("click", fetchUserData);

    darkModeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        userCard.classList.toggle("dark-mode");
    });
});
