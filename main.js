console.log("working");
let results = null;

//fetch example
function showResultLength () {
    document.getElementById('big-boi').innerText = results.length;

}

function makeFetchHappen () {
    fetch('https://www.reddit.com/search.json?q=puppies')
    .then(function(responseData) {
    return responseData.json();  //turns the reponse data into json
})


.then(function(responseJson) {
    results = responseJson.data.children
    console.log(results)
    showResultLength()
})
.catch(function(error) {
    console.log(error)
})
}



document.getElementById('ajax').addEventListener('click', makeFetchHappen)
console.log('yay data')

//fetch .then returns a "promise"
// .catch runs if there is an error w the query
/* fetch(URL)
    .then(respone => response.json())
    .then(jsonData => {
        your code here
    })

    remember the above code!*/
    