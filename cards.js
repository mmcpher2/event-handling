
console.log("let's go!")

// When the user enters in text into the text area and then clicks the create button, 
// create a new card element in the DOM that includes it's own delete button. 
// You decide the height/width of the card.

let outputElement = document.getElementById("output")
let cardMessage = document.getElementsByClassName("message")

// ID within create button element
let createButton = document.getElementById("submit-message")

// Create unique ID for each new card
const idGenerator = function* () {
    let id = 1
    while (true)
    yield id++
}
// Instance of ID generator
let uniqueID = idGenerator()


// listenting for click on create button
let createButtonClick = createButton.addEventListener("click", function (){
    // Add a card text 
    let newCard = document.getElementById("message").value
    
    let prefixIds = uniqueID.next().value

    // with html text and delete button

        document.getElementById("output").insertAdjacentHTML(`afterbegin`,`
        <section id="sect-${prefixIds}"class="newCardBox">
            <article class="contentBox"id="art-${prefixIds}">${newCard}</article>
            <button id="butt-${prefixIds}" class="deleteBtn">Delete Card</button>
        </section>`)

        let deleteBtn = document.getElementById(`butt-${prefixIds}`)
    
        deleteBtn.addEventListener("click", function () {
            console.log(prefixIds);
            let currentPost = document.getElementById(`sect-${prefixIds}`)
            console.log(currentPost);
            currentPost.parentNode.removeChild(currentPost)
        })
})

// When the user clicks the Delete button, the containing card, and no other cards, 
// should then be removed from the DOM. Not just made invisible, actually removed from the DOM.


// In order to know which delete button the user clicked on, each one must have a unique value 
// in its id attribute.  Remember your factory and generator functions. Generator should yield 
// a unique identifier. Factory should generate DOM string.

// You can't attach an event listener to an element until it has been added to the DOM.