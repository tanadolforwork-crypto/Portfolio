
async function loadData() {
  const profileRes = await fetch('content/profile.json');
  const profile = await profileRes.json();

  document.querySelector('.hero-name').textContent = profile.name;
  document.querySelector('.hero-position').textContent = profile.position;
  document.querySelector('.hero-description').textContent = profile.description;

  const projectRes = await fetch('content/projects.json');
  const projects = await projectRes.json();

  const container = document.getElementById('projectList');

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

    container.appendChild(card);
  });
}

loadData();
