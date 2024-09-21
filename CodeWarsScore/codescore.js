const apiUrl = "https://www.codewars.com/api/v1/users/";

async function fetchUserData() {
    const username = document.getElementById("username").value;
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");

    resultDiv.innerHTML = "";
    errorDiv.innerHTML = "";

    if (!username) {
        errorDiv.innerHTML = "Kérlek, adj meg egy felhasználónevet!";
        return;
    }

    try {
        const response = await fetch(`${apiUrl}${username}`);
        if (response.ok) {
            const data = await response.json();
            displayUserInfo(data);
        } else if (response.status === 404) {
            errorDiv.innerHTML = "Hiba: Nincs ilyen felhasználó!";
        } else {
            errorDiv.innerHTML = "Hiba történt az adatok lekérése során!";
        }
    } catch (error) {
        errorDiv.innerHTML = "Hálózati hiba történt!";
    }
}

function displayUserInfo(data) {
    const resultDiv = document.getElementById("result");
    const overallPoints = data.ranks.overall.score;
    const languages = data.ranks.languages;

    let output = `<h2>${data.username} összes pontja: ${overallPoints}</h2>`;

    output += "<h3>Pontok nyelvek szerint:</h3>";
    output += "<table><thead><tr><th>Nyelv</th><th>Pontok</th></tr></thead><tbody>";

    for (let lang in languages) {
        output += `<tr><td>${lang}</td><td>${languages[lang].score}</td></tr>`;
    }
    output += "</tbody></table>";

    resultDiv.innerHTML = output;
}

function showUserInfo() {
    document.getElementById("result").style.display = "block";
    document.getElementById("toplist").style.display = "none";
}