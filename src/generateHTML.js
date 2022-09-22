//build other specific functions for mgr, eng, int
//*build for loop?
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
  <title>Team Members</title>
</head>
<body>
  
</body>
</html>

  ${genMgr(teamMembers.filter((member) => member.getRole() === "Manager"))}

  ${genEngineer(teamMembers.filter((member) => member.getRole() === "Engineer"))}

  ${genIntern(teamMembers.filter((member) => member.getRole() === "Intern"))}


  `;
}

//array method for loop + filter()

module.exports = genHTML;
