function shoppingList() {   
    // this stops the default form submission behavior
    $("#js-shopping-list-form").submit(event =>{  
        event.preventDefault();

        //this adds a list item
        const shoppingItem = $(this).find('#shopping-list-entry');
        $(".shopping-list").append('<li><span class="shopping-item">'+
        `${shoppingItem.val()}`+
        '</span><div class="shopping-item-controls">'+
        '<button class="shopping-item-toggle"><span class="button-label">check</span></button> '+
        '<button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
        shoppingItem.val("");
        });
    
    //this deletes an item when 'delete' is clicked
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
    });

    //this checks/unchecks an item when 'check' is clicked
    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    
}

$(shoppingList);