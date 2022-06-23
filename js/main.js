    const buttonPlay = document.getElementById('start-game')

    const dinamicGrid = document.getElementById('grid-dinamic');
    
    const extractedElements = [];
    
    buttonPlay.addEventListener('click', function(){

    for (let i = 0; i < 100; i++) {
        const newBox = createNewBox();

        newBox.addEventListener('click' , function(){
            newBox.classList.toggle('azzurro');
        })
        dinamicGrid.append(newBox);
    }
})


    function createNewBox() {
        const currentBox = document.createElement('div');
        currentBox.classList.add('rs_box_consegna');
        return currentBox;

    }