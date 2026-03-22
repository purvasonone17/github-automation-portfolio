// Topic: JavaScript Async/Await

async function fetchData() {
  try {
    const response = await fetch('https://api.github.com/users/octocat');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();