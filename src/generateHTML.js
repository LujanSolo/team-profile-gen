
function genMgr(managers) {
  return `
  <div class="card bg-light shadow-lg p-1 bg-white rounded mb-4" style="width: 18rem;">
  <div class="card-body bg-primary text-white rounded-2">
    <h4 class="card-title">${managers[0].name}</h4>
    <h5 class="card-text"><i class="fa-solid fa-mug-hot me-2"></i>Manager</h5>
  </div>
  <div class="m-3 border border-secondary border-opacity-25">
  <ul id="details" class="list-group list-group-flush">
    <li class="list-group-item">ID: ${managers[0].id}</li>
    <li class="list-group-item">Email: <a href="mailto:${managers[0].email}">${managers[0].email}</a></li>
    <li class="list-group-item">Office number: ${managers[0].officeNumber}</li>
  </ul>
  </div>
  </div>
  `;
}

function genEngineer(engineers) {
  if (engineers.length === 0) {
    return "";
  }
  return engineers
    .map(
      (member) =>
        `
  <div class="card bg-light shadow-lg p-1 bg-white rounded mb-4" style="width: 18rem;">
  <div class="card-body bg-primary text-white rounded-2">
    <h4 class="card-title"></i>${member.name}</h4>
    <h5 class="card-text text"><i class="fa-solid fa-glasses me-2"></i>Engineer</h5>
  </div>
  <div class="m-3 border border-secondary border-opacity-25">
  <ul id="details" class="list-group list-group-flush">
    <li class="list-group-item">ID: ${member.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
    <li class="list-group-item">GitHub: <a href="https://github.com/${member.github}">${member.github}</a></li>
  </ul>
  </div>
  </div>
  `
    )
    .join("");
}

function genIntern(interns) {
  if (interns.length === 0) {
    return "";
  }
  return interns
    .map(
      (member) =>
        `
  <div class="card bg-light shadow-lg p-1 bg-white rounded mb-4" style="width: 18rem;">
  <div class="card-body bg-primary text-white rounded-2">
    <h4 class="card-title">${member.name}</h4>
    <h5 class="card-text"><i class="fa-solid fa-user-graduate me-2"></i>Intern</h5>
  </div>
  <div class="m-3 border border-secondary border-opacity-25">
  <ul id="details" class="list-group list-group-flush">
    <li class="list-group-item">ID: ${member.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
    <li class="list-group-item">School: ${member.school}</li>
  </ul>
  </div>
  </div>
  `
    )
    .join("");
}

function genHTML(teamMembers) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- BOOTSTRAP 5.2 LINKED -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <!-- GOOGLE FONTS LINKED -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <script src="https://kit.fontawesome.com/2d308f669c.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Recursive:ital@0;1&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <title>Team Members</title>
  </head>
    <header>
      <h1 id="masthead" class="text-center text-white py-4 mb-5">My Team</h1>
    </header>
  <body class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col">
          ${genMgr(teamMembers.filter((member) => member.getRole() === "Manager"))}
        </div>
        <div class="col">
          ${genEngineer(teamMembers.filter((member) => member.getRole() === "Engineer"))}
        </div>
        <div class="col">
          ${genIntern(teamMembers.filter((member) => member.getRole() === "Intern"))}
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
}

module.exports = genHTML;

//todo ADD validation for input fields to ensure user input matches expected format