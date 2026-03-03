const postData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // fetch()
    fetch(url)
        .then(jsonFile => jsonFile.json()) //promise back
        .then(jsonFile => {
            displayPost(jsonFile); //nicher function call
            // je function theke ami data pabo
        });
};

displayPost = (posts) => {
    // get main container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = "";

    // main container e proti ta property store er jonno element make
    posts.forEach(element => {
        const postCard = document.createElement('div');
        // postCard.innerHTML = element.title;

        // JS e HTML likha
        postCard.innerHTML = `<div class="post-card"> <!--ei ta te style dite hobe-->
            <h1>${element.title}</h1>
            <p> ${element.body}</p>
        </div>`

        // append in main
        postContainer.appendChild(postCard);
    });
};

// button a click chara cards show korte hole call koro
postData();






























// // Use of ES6 properties
// const postData = () => {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     fetch(url)
//         .then((res) => res.json()) //json file promise
//         .then((jsonFile) => {
//             console.log(jsonFile);
//             displayPost(jsonFile);
//         });
// };


// // forEach() loop
// const displayPost = (posts) =>{
//     posts.forEach(post => {
//        console.log(post);
//     });
// };
// // array of obj. jeta url a stored ase