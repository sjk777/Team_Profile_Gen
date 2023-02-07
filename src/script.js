const teamRender = (team) => {
  const renderManager = (manager) =>
    `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">
    <ul class="detail-list">
    <li>${manager.id} </li>
    <li>Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
    <li>Office Number: ${manager.officeNumber}</li>
    </ul>
    
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

  //rendering Intern

  const renderIntern = (intern) =>
    `<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">${intern.name}</h5>
<p class="card-text">
<ul class="detail-list">
<li>${intern.id} </li>
<li>Email: <a href="mailto: ${intern.email}">${intern.email}</a></li>
<li>Office Number: ${intern.school}</li>
</ul>

</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

  //rendering Engineer
  const renderEngineer = (engineer) =>
    `<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">${engineer.name}</h5>
<p class="card-text">
<ul class="detail-list">
<li>${engineer.id} </li>
<li>Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
<li>Office Number: ${engineer.gitHub}</li>
</ul>

</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

  //array for html
  const htmlCreate = [];

  //pushing manager to html
  htmlCreate.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => renderManager(manager))
  );

  //pushing Intern to html
  htmlCreate.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => renderIntern(intern))
  );

  //pushing Engineer to html
  htmlCreate.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );

  return htmlCreate.join("");
};

const mainHTML = (team) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
  <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1, text-center">Our Team</span>
  </div>
</nav>

<div class="container">
      <div class="row">
        <div
          class="team-mem-container col-12 d-flex flex-wrap justify-content-around"
        >
          ${teamRender(team)}
        </div>
      </div>
</div>

  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>

  </html>
  `;

module.exports = mainHTML;
