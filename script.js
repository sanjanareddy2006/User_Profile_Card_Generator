const form = document.getElementById("profileForm");
const cardContainer = document.getElementById("cardContainer");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const bio = document.getElementById("bio").value;
  const image = document.getElementById("image").value;

  try {
    const response = await fetch("http://localhost:5000/create-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        bio,
        image,
      }),
    });

    const data = await response.json();

    if (data.success) {
      displayProfile(data.profile);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
});

function displayProfile(profile) {
  cardContainer.innerHTML = `
    <div class="profile-card">
      <img src="${profile.image}" alt="${profile.name}" />
      <h2>${profile.name}</h2>
      <p>${profile.bio}</p>
    </div>
  `;
}