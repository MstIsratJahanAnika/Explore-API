
// console.log(result);
//   .then(response => response.json())
//   .then(json => console.log(json))

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())// promise dicche
        .then((data) => console.log(data)); //promise jejonno dicche ta dicche 
};
// button er maddhome data load hobe JSON er 

// ES6 practice 
const postData = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then((res) => res.json()) //json file promise
        .then((jsonFile) => {
            console.log(jsonFile);
            displayPost(jsonFile);
        });
};


// forEach() loop
const displayPost = (posts) =>{
    posts.forEach(post => {
       console.log(post); 
    });
};
// array of obj. jeta url a stored ase