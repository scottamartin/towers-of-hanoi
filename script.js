'use strict';

let selectedBlock = null;

$(document).ready(function() {
    $(".reset").click(function() {
        reset();
    });

    $("div[data-stack]").click(function() {
        if (selectedBlock != null && selectedBlock.length > 0)
        {
            moveBlock($(this));

            if(isWin())
            {
                alert("YOU WIN!");
            }
            return;
        }

        selectedBlock = $(this).children().last();        
    });
});

function moveBlock(newStack) {
    var newStackValue = newStack.children().last().attr('data-block');
    var oldStackValue = selectedBlock.attr('data-block');
    if(parseInt(oldStackValue) >= parseInt(newStackValue))
    {
        selectedBlock = null;
        return;
    }
    selectedBlock.appendTo(newStack);
    selectedBlock = null;
}

function isWin() {
    return $("div[data-stack='3']").children().length === 4;
}

function reset() {
    $("div[data-block]").sort(function(a, b) {
        return parseInt($(a).attr('data-block')) < parseInt($(b).attr('data-block'));
    }).each(function(index) {
        $(this).appendTo($("div[data-stack='1']"));
    });

    selectedBlock = null;
}