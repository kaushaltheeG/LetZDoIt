//variables
const enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

//functions
function inputLength() {
    return input.value.length;
};

function taskListLength() {
    return item.length;
};

function createListEle() {
    let listItem = document.createElement("li"); //creates an element with 'li' tag from popandCharacter
    listItem.appendChild(document.createTextNode(input.value)); //converts user input to li text
    ul.appendChild(listItem); //appends the li onto the ul(unorderedlist) 
    
    //#region Eliminating Completed Tasks
    
    function taskEliminate() {
        listItem.classList.toggle("done");
        //ul.appendChild(listItem);
    }

    listItem.addEventListener("click",taskEliminate); //after clicking task, it is marked as complete 
    //#endregion

    //#region Creating Delete Btn
    let deleteBtn = document.createElement("button"); 

    deleteBtn.appendChild(document.createTextNode("X")); //establishes X as the delete btn
    listItem.appendChild(deleteBtn); //every task now has a delete btn
    deleteBtn.addEventListener("click", deleteTask); //as soon as X is clicked, task is removed

    function deleteTask() {
        listItem.classList.add("delete");
    }
    //#endregion

    //#region Priority Btn allowing the task to float to the top
    let priorityBtn = document.createElement("button");

    priorityBtn.appendChild(document.createTextNode("P"))
    listItem.appendChild(priorityBtn);
    priorityBtn.addEventListener("dblclick", function(e) {
        listItem.classList.toggle("priority");
         ul.prepend(listItem);
    });

    //function priorityTask(e) {
        //listItem.classList.toggle("priority");
         //ul.prepend(listItem);
  
    //}
    //#endregion
};

const addTaskToList = () => {
    //ensures input isn't empty
    if (inputLength() > 0) {
        createListEle();
    }
};

const addTaskWithKeyPress = event => {
    //ensures input isn't empty and can add task after enter/return is press
    if (inputLength() > 0 && event.which ===13) {
        createListEle();
    }
};

enterButton.addEventListener("click", addTaskToList); //adds task after pencil btn is clicked
input.addEventListener("keypress", addTaskWithKeyPress); //adds task when enter/return key is selected

