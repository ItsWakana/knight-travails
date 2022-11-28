import './style.css';

export class Grid {

    constructor(size) {
        this.size = size;
    }

    createGrid() {
        //create a main container for the grid. 
        //in the first loop, create 7 columns or rows
        // in the second inner loop, we want to create 7 boxes to go inside these columns or rows.
        const gridContainer = document.createElement('div');
        gridContainer.className = 'container';
        document.body.append(gridContainer);

        for (let i=0; i<this.size; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            gridContainer.append(row);

            for (let j=0; j<this.size; j++) {
                const box = document.createElement('div');
                box.className = 'box';
                row.append(box);
            }
        }

    }
}