// app.js

let cachedUser = null;
let cachedUserId = null; 

async function loadUser() {
  const userId = document.getElementById('userId').value.trim();

  if (userId === '') {           
    showResult('Please enter a valid ID');
    return;
  }

  if (Number(userId) <= 0 || isNaN(Number(userId))) {  
    showResult('ID must be a positive number', true);
    return;
  }

  try {
    if (!cachedUser || cachedUserId !== userId) {
      cachedUser = await fetchUser(userId);
      cachedUserId = userId;
    }

    const user = cachedUser;
    
    const result = document.getElementById('result');
    result.innerHTML = '';

    const name = document.createElement("strong");
    name.textContent = user.name;

    const email = document.createTextNode(`  ${user.email}`);
    const website = document.createTextNode(`  ${user.website}`);

    result.appendChild(name);
    result.appendChild(document.createElement('br'));
    result.appendChild(email);
    result.appendChild(document.createElement('br'));
    result.appendChild(website);
  
  } catch (err) {
    showResult(`Error: ${err.message}`, true);
  }
}

function showResult(message, isError = false) {
  const el = document.getElementById('result');
  el.className = isError ? 'error' : '';
  el.textContent = message;
}
