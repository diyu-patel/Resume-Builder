function startResume() {
    window.location.href = "Builder.html";
}
function addExperience(){
    const container = document.getElementById("experience-list");

    const div = document.createElement("div");
    div.className = "experience";

    div.innerHTML = `
    <div class="exp-head">
    <strong>Experience Entry</strong>
                   <button class="delete-btn" onclick="deleteExperience(this)">🗑</button>
                </div>
  <div class="grid-2">
      <div>
        <label>Company</label>
        <input type="text" placeholder="Company Name">
      </div>

      <div>
        <label>Position</label>
        <input type="text" placeholder="Job Title">
      </div>

      <div>
        <label>Location</label>
        <input type="text" placeholder="City, State">
      </div>

      <div>
        <label>Start Date</label>
        <input type="text" placeholder="Jan 2020">
      </div>

      <div>
        <label>End Date</label>
        <input type="text" placeholder="Present">
      </div>
    </div>

    <textarea placeholder="Describe your responsibilities..."></textarea>
  `;

    container.appendChild(div);
}
function deleteExperience(btn){
    btn.closest(".experience").remove();
}
function addEducation(){
  const container = document.getElementById("education-list");

  const div = document.createElement("div");
  div.className = "education";

  div.innerHTML = `
    <div class="edu-head">
      <strong>Education Entry</strong>
      <button class="delete-btn" onclick="deleteEducation(this)">🗑</button>
    </div>

    <div class="grid-2">
      <div>
        <label>Institute</label>
        <input type="text" placeholder="College / School Name">
      </div>

      <div>
        <label>Degree</label>
        <input type="text" placeholder="BCA, BSc, etc.">
      </div>

      <div>
        <label>Start Year</label>
        <input type="text" placeholder="xxx">
      </div>

      <div>
        <label>End Year</label>
        <input type="text" placeholder="xxx">
      </div>
    </div>
  `;

  container.appendChild(div);
}
function deleteEducation(btn){
    btn.closest(".education").remove();
}
function addProject(){
  const container = document.getElementById("project-list");

  const div = document.createElement("div");
  div.className = "project";

  div.innerHTML = `
    <div class="ph">
      <strong>Project Entry</strong>
      <button class="delete-btn" onclick="deleteProject(this)">🗑</button>
    </div>

    <div class="ph2">
      <div>
        <label>Project Name</label>
        <input type="text" placeholder="My Project">
      </div>

      <div>
        <label>Description</label>
        <input type="text" placeholder="Describe the project...">
      </div>

      <div>
        <label>Technologies</label>
        <input type="text" placeholder="React, TypeScript, Node.js">
      </div>
  `;

  container.appendChild(div);
}
function deleteProject(btn){
    btn.closest(".project").remove();
}
function printResume(){
  window.print();
}