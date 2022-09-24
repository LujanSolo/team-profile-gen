//build other specific functions for mgr, eng, int
function genMgr(managers) {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"><i class="fa-solid fa-mug-hot">  ${managers[0].name}</h5>
    <p class="card-text">Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${managers[0].id}</li>
    <li class="list-group-item">Email: <a href="mailto:${managers[0].email}">${managers[0].email}</a></li>
    <li class="list-group-item">Office number: ${managers[0].officeNumber}</li>
  </ul>
  </div>
  `;
}
// join function
function genEngineer(engineers) {
  if (engineers.length === 0) {
    return '';
  }
  return engineers.map((member) =>
  `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"><i class="fa-sharp fa-solid fa-glasses-round"></i>  ${member.name}</h5>
    <p class="card-text">Engineer</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${member.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
    <li class="list-group-item">GitHub: ${member.github}</li>
  </ul>
  </div>
  `
  ).join('')
}

function genIntern(interns) {
  if (interns.length === 0) {
    return '';
  }
  return interns.map((member) =>  
  `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title p-3 mb-2 bg-primary text-white"><i class="fa-solid fa-user-graduate"></i>  ${member.name}</h5>
    <p class="card-text">Intern</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${member.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
    <li class="list-group-item">School: ${member.school}</li>
  </ul>
  </div>
  `
  ).join('')
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
<body>
  <header>
    <h1 id="masthead" class="text-center text-white py-2">My Team</h1>
  </header>
<body>

${genMgr(teamMembers.filter((member) => member.getRole() === "Manager"))}

${genEngineer(teamMembers.filter((member) => member.getRole() === "Engineer"))}

${genIntern(teamMembers.filter((member) => member.getRole() === "Intern"))}

</body>
</html>
  `;
}

module.exports = genHTML;

//TODO: Style cards in their individual functions. 
//TODO: Style card placement in <body> of genHTML function