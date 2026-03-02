const postData = () =>{
    const url ="https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then(jesonFile => jesonFile.json())
        .then(jesonFile => {
            console.log(jesonFile);
            displayPost(jesonFile);
        })
};

// function to display each element 
displayPost = (posts) =>{
    // get the container
    const postContainer = document.getElementById('post-container');
    // console.log(postContainer);
    postContainer.innerHTML = "";


    // forEach loop of array 
    // container er proti ta object er jonno 
    posts.forEach(post => {
        //console.log(post); //pura object dibe

        // new element make, ul er moddhe thakbe
        const li = document.createElement('li');
        li.innerText = post.title; // post object er ekta property
        // console.log(li);

        // postContainer, jeta html a ul, shekhane 'li appendChild' kore dite hobe
        postContainer.appendChild(li);
    });
}


































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