function render(services) {
  const container = document.querySelector('#container');
  container.innerHTML = ''; // Removes the previous elements
  const list = document.createElement('div');
  list.style = `
  display: flex;
  flex-wrap: wrap;
  margin-top: 2%;
  gap: 40px;
  justify-content: center;
`;

  const h1 = document.createElement('h1');
  h1.textContent = 'Our Services';
  h1.className = 'text-center'
  h1.style = `color: #A4283C; margin-top: 30px; font-size: 40px`;
  container.appendChild(h1);


  list.className = `text-center`;
  services.forEach(({ title, text, picture, route }) => {
    const item = document.createElement('div');
    item.className = `card text-white mb-3`;
    item.style = `
    flex: 1 1 calc(50% - 20px);
    max-width: calc(40% - 20px);
    background-color: #04247B;
    transition: transform 0.3s, box-shadow 0.3s;
    color: white;
  `;
    item.innerHTML = `
    <div class="card h-100">
      <img src="${picture}" class="card-img-top" alt="${title}" style="height: 200px; object-fit: cover;">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${text}</p>
        <button class="btn btn-light" style="margin-top: 10px;">Check Out</button>
      </div>
    </div>`;

    const button = item.querySelector('button');

    button.addEventListener('click', () => {
      // Access the path property of the route object
      window.location.href = route;
    });

    list.appendChild(item);
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.02)';
      item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.6)';
    });
    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
      item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
    });
  });

  container.appendChild(list);
}

export default { render };
