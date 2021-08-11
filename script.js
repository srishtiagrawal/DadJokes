 const joke = document.getElementById('joke');
 const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

 generateJoke();

//using async/await
async function generateJoke () {
    const config = {
                headers: {
                    'Accept': 'application/json'
                }
            }
    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json();
    joke.innerHTML = data.joke;
}

// using .then()
//  function generateJoke() {
//      const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', config)
//     .then((res)=> res.json())
//     .then((data)=> {
//         joke.innerHTML = data.joke;
//     })
//  }