let ulTasks= $('#ulTask');
let btnAdd= $('#btnAdd');
let btnClear= $('#btnClear');
let inpNewTask= $('#inpnewTask');
let btnCleanup= $("#btnCleanup");
let btnSort= $('#btnSort');

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
        console.log("jQuery Working");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
        console.log("jQuery not Working");
    }
}

let addfunction= function()
{
    console.log("button clicked");
//    let inputval=inpNewTask[0].value;
    console.log(inpNewTask.val());
    let listitem= $('<li>',{
        'class': 'list-group-item',
        text: inpNewTask.val()
    }); // creating new object using jQuery
    ulTasks.append(listitem);
    inpNewTask.val('');

    listitem.click(function(event)
    {
        console.log("list item clicked");
        $(event.target).toggleClass('done');
    })
    toggleInputButton();
}
function clickreset()
{
    inpNewTask.val('');
    toggleInputButton(true);
}
btnClear.click(clickreset);

btnAdd.click(addfunction);

inpNewTask.keypress(function(event){
    if(event.keyCode==13 && inpNewTask.val()!=""){
        btnAdd.click();
    }
})

function clearDone(){
    $('#ulTask .done').remove(); // removes DOM elements from the html page
    toggleInputButton();
}
btnCleanup.click(clearDone)

function sortTasks(){
    $('#ulTask .done').appendTo(ulTasks) // append the done items to the end of the UL task list
}

btnSort.click(sortTasks); 

function toggleInputButton(){
    btnClear.prop('disabled',inpNewTask.val()=='');
    btnAdd.prop('disabled',inpNewTask.val()=='');
    btnSort.prop('disabled',ulTask.children.length<1)
    btnCleanup.prop('disabled',ulTask.children.length<1)

}

inpNewTask.on('input',toggleInputButton)

