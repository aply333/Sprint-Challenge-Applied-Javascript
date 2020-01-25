// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector('.topics')

function tabCreator(topic){
    let div = document.createElement('div')
        div.classList.add('tab')
        div.textContent = topic
        topics.appendChild(div);
}

function axiosAttach(){
    axios
        .get('https://lambda-times-backend.herokuapp.com/topics')
        .then(res =>{
            let data = res.data.topics
            return data.forEach(cV => tabCreator(cV))
        })
        .catch(err => console.log(err));
}

axiosAttach()

