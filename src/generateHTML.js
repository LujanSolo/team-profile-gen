//build other specific functions for mgr, eng, int
function genMgr(managers) {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${managers[0].name}</h5>
    <p class="card-text">Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${managers[0].id}</li>
    <li class="list-group-item">Email: <a href='${managers[0].email}'</li>
    <li class="list-group-item">Office number: ${managers[0].officeNumber}</li>
  </ul>
  </div>
  `;
}

function genEngineer(engineers) {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineers[0].name}</h5>
    <p class="card-text">Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineers[0].id}</li>
    <li class="list-group-item">Email: <a href='${engineers[0].email}'</li>
    <li class="list-group-item">GitHub: ${engineers[0].github}</li>
  </ul>
  </div>
  `;
}

function genIntern(interns) {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${interns[0].name}</h5>
    <p class="card-text">Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${interns[0].id}</li>
    <li class="list-group-item">Email: <a href='${interns[0].email}'</li>
    <li class="list-group-item">School: ${interns[0].school}</li>
  </ul>
  </div>
  `;
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
   <link href="https://fonts.googleapis.com/css2?family=Recursive:ital@0;1&display=swap" rel="stylesheet" />
   <link rel="stylesheet" href="style.css" />
    <title>Team Members</title>
  </head>
<body>
${genMgr(teamMembers.filter((member) => member.getRole() === "Manager"))}

${genEngineer(teamMembers.filter((member) => member.getRole() === "Engineer"))}

${genIntern(teamMembers.filter((member) => member.getRole() === "Intern"))}
</body>
</html>




  `;
}

//array method for loop + filter()

module.exports = genHTML;
