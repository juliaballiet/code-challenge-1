console.log('js')

$(readyNow)

let clicks = 0;

function readyNow() {
    console.log('jq')
    //click handler for generate button
    $('#generate-button').on('click', generateDiv);
    //click handler for swap button
    $('#contents').on('click', '#swap-button', swapBackground)
    //click handler for delete button
    $('#contents').on('click', '#delete-button', deleteDiv)
} //end readyNow

function generateDiv() {
    console.log('generate clicked')
    //incrementing clicks count
    clicks += 1;
    //append div and buttons to dom
    $('#contents').append(`<div class="red">
                            <p> ${clicks} </p>
                            <button id="swap-button">Swap</button>
                            <button id="delete-button">Delete</button>
                            </div>`);
} //end generateDiv

function swapBackground() {
    console.log('swap clicked');
    //toggle class between red and yellow
    $(this).parent().toggleClass('yellow');
} //end swapBackground

function deleteDiv() {
    console.log('delete clicked');
    //remove the div and all contents from the dom
    $(this).parent().remove();
} //end deleteDiv