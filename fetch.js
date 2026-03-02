
// console.log(result);
//   .then(response => response.json())
//   .then(json => console.log(json))

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())// promise dicche
        .then((data) => console.log(data)); //promise jejonno dicche ta dicche 
}
// button er maddhome data load hobe JSON er 