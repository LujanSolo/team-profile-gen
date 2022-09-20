//build other specific functions for mgr, eng, int
//*build for loop
function genMgr(managers){
  return `
  <h1>${ managers[0].name }</h1>
  `
}


function genHTML(teamMembers){
  return `
  //* all html goes here, except for the car
  ${genMgr(teamMembers.filter(member => member.getRole() === 'Manager'))}
  `
}

//array method for loop + filter()

module.exports = genHTML