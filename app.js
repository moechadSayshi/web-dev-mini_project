dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
function dragElement(terrariumElement) {

    //set 4 positions for positioning on the screen

    let pos1 = 0;
    pos2=0;
    pos3=0;
    pos4=0;
//1. when you touch the terrariumElement, start tracking the pointer    
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
         // set pos3 to be e's clientX
        pos3 = e.clientX;
        // set pos4 to be e's clientY
        pos4 = e.clientY;
        // when the mouse moves, start the drag
        document.onpointermove = elementDrag;
         // when the mouse is lifted, stop the drag
        document.onpointerup = stopElementDrag;
    }
    function elementDrag(e) {
            // calculate the new cursor position
//. set pos1 = where the Xmouse WAS - where it IS
        pos1 = pos3 - e.clientX;
        //5. set pos2 = where the Xmouse WAS - where it IS
        pos2 = pos4 - e.clientY;
         // reset pos3 to current location of Xmouse
        pos3 = e.clientX;
         // reset pos4 to current location of Xmouse
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        // set the element's new position:
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag() {
        // stop calculating when mouse is released
        //9. reset the raised pointer to null
        document.onpointerup = null;
        //10. reset the moved pointer to null
        document.onpointermove = null;

    }
    

}

