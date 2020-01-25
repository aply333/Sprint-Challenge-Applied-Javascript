// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsContainer = document.querySelector('.cards-container');

function imgContainer(item){
    let div = document.createElement('div')
    div.classList.add('img-container')
    let img = document.createElement('img')
        img.setAttribute('src', item.authorPhoto)
    div.appendChild(img)
    return div;
}

function span (item){
    let span = document.createElement('span')
    span.textContent = `By ${item.authorName}`
    return span;
}

function authorDiv (item){
    let div = document.createElement('div')
    div.classList.add('author')
    div.appendChild(imgContainer(item))
    div.appendChild(span(item))
    return div;
}

function headline (item){
    let div = document.createElement('div')
    div.classList.add('headline')
    div.textContent = item.headline
    return div;    
}

// Complete Component Assebly
function card (item){
    let div = document.createElement('div')
    div.classList.add('card')
    div.appendChild(headline(item))
    div.appendChild(authorDiv(item))
    cardsContainer.appendChild(div);
}

function jsArticles(){
    axios
        .get('https://lambda-times-backend.herokuapp.com/articles')
        .then(res => { 
            let data = res.data.articles.javascript
            data.forEach(cV => card(cV))
        })
        .catch(err => console.log(err))
}

function bootstrapArticles(){
    axios
        .get('https://lambda-times-backend.herokuapp.com/articles')
        .then(res => { 
            let data = res.data.articles.bootstrap
            data.forEach(cV => card(cV))
        })
        .catch(err => console.log(err))
}

function techArticles(){
    axios
        .get('https://lambda-times-backend.herokuapp.com/articles')
        .then(res => { 
            let data = res.data.articles.technology
            data.forEach(cV => card(cV))
        })
        .catch(err => console.log(err))
}

function jqueryArticles(){
    axios
        .get('https://lambda-times-backend.herokuapp.com/articles')
        .then(res => { 
            let data = res.data.articles.jquery
            data.forEach(cV => card(cV))
        })
        .catch(err => console.log(err))
}

function nodeArticles(){
    axios
        .get('https://lambda-times-backend.herokuapp.com/articles')
        .then(res => { 
            let data = res.data.articles.node
            data.forEach(cV => card(cV))
        })
        .catch(err => console.log(err))
}

function articleLoad(){
    jsArticles()
    bootstrapArticles()
    techArticles()
    jqueryArticles()
    nodeArticles()
}