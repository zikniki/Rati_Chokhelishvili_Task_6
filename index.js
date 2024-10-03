
async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    data.forEach(person => {
        console.log(`Name: ${person.name}, Email: ${person.email}`);
    });
}

fetchUser();