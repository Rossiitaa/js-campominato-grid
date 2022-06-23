    const buttonPlay = document.getElementById('start-game')

    const dinamicGrid = document.getElementById('grid-dinamic');
    
    const extractedElements = [];
    

    buttonPlay.addEventListener('click', function(){
        dinamicGrid.innerHTML = null;

    for (let i = 0; i < 100; i++) {
        const newBox = createNewBox();
        newBox.innerHTML = i
        newBox.addEventListener('click' , function(){
            newBox.classList.toggle('azzurro');
            console.log(newBox.innerHTML);
        })
        dinamicGrid.append(newBox);
    }
})


    function createNewBox() {
        const currentBox = document.createElement('div');
        currentBox.classList.add('rs_box_consegna');
        return currentBox;
    }