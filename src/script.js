const teamRender = (team) => {
  const renderManager = (manager) =>
    `<div class="card" style="width: 18rem;">
  <img src="./img/manager.png " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">
    <ul class="detail-list">
    <li>${manager.title} </li>
    <li>${manager.id} </li>
    <li>Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
    <li>Office Number: ${manager.officeNumber}</li>
    </ul>
    
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

  const renderManager = (manager) =>
    `<div class="card" style="width: 18rem;">
<img src="./img/manager.png " class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${manager.name}</h5>
<p class="card-text">
<ul class="detail-list">
<li>${manager.title} </li>
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
<img src="./img/manager.png " class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${intern.name}</h5>
<p class="card-text">
<ul class="detail-list">
<li>${intern.title} </li>
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
<img src="./img/manager.png " class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${engineer.name}</h5>
<p class="card-text">
<ul class="detail-list">
<li>${engineer.title} </li>
<li>${engineer.id} </li>
<li>Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
<li>Office Number: ${engineer.gitHub}</li>
</ul>

</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
};

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
  crossorigin="anonymous"
></script>;
