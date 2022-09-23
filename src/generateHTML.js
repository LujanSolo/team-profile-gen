//build other specific functions for mgr, eng, int
function genMgr(managers) {
  return `
  <h1>${managers[0].name}</h1>
  `;
}

function genEngineer(engineers) {
  return `
  <h1>${engineers[0].name}</h1>
  `;
}

function genIntern(interns) {
  return `
  <h1>${interns[0].name}</h1>
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
