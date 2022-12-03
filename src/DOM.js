import './style.css';
import { startRoute } from './main';
import knightIcon from './assets/knight.svg';

export class Grid {

    constructor(size) {
        this.size = size;
    }

    createGrid(resultGrid = false) {
        const gridContainer = document.createElement('div');

        if (resultGrid) {
            gridContainer.className = 'results-grid';
        } else {
            gridContainer.className = 'container';
        } 
        document.body.append(gridContainer);

        for (let i=0; i<this.size; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            gridContainer.append(row);
            row.dataset.x = i;

            for (let j=0; j<this.size; j++) {
                const box = document.createElement('div');
                box.className = 'box';
                row.append(box);
                box.dataset.y = j;
                if (!resultGrid) { 
                    this.displayKnightMovesOnClick(box, row, gridContainer);
                }

            }
        }

    }

    createResultGrid() {
        //instead of using the original grid creation we should create a new and smaller grid for the overlay. 
    }

    displayKnightMovesOnClick(box, row, container) {

        box.addEventListener('click', () => {
            if (container.dataset.pathFinished === 'true') return;
            const coordinate = `${row.dataset.x},${box.dataset.y}`;
            this.displayKnightOnGrid(knightIcon, box);
            const route = startRoute(coordinate, box);
            if (route) {
                this.displayResult(route)
            }
            this.coordinateModal(box, coordinate, container);
        });
    }
    
    coordinateModal(container, coordinate, gridContainer) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        if (container.dataset.position === 'start') {
            modal.textContent = `Start: ${coordinate}`;
        } else {
            modal.textContent = `Destination: ${coordinate}`;
            gridContainer.dataset.pathFinished = 'true';
        }

        container.append(modal);
    }

    displayResult(result) {
        const displayContainer = document.createElement('div');

        const displayResult = document.createElement('p');
        const displayMoves = document.createElement('p');

        displayResult.textContent = `You made it in ${result.length -1} moves.`;
        for (let move of result) {
            displayMoves.textContent += ` [${move}] =>`;
        }
        const chop = displayMoves.textContent.substring(0,displayMoves.textContent.length -2);
        displayMoves.textContent = chop;
        console.log(result);

        
        document.body.append(displayContainer);
        displayContainer.append(displayResult, displayMoves);
        this.renderResultsButton(displayContainer);
    }

    displayKnightOnGrid(icon, square) {
        const knightIcon = new Image();
        knightIcon.src = icon;
        knightIcon.id = 'knight';

        square.appendChild(knightIcon);
    }

    renderResultsButton(container) {
        const button = document.createElement('button');
        button.className = 'results-button';
        button.textContent = 'See moves';
        button.addEventListener('click', () => {
            this.visualResultModal();
        })
        container.appendChild(button);
    }

    visualResultModal() {
        // const secondGrid = new Grid(this.size);

        
        
        // secondGrid.createGrid(true);
        ResultGrid.displayResult(this.size);
        
        const modal = document.querySelector('.results-grid');
        modal.classList.add('visible');


    }
}

export class ResultGrid {
    static displayResult(gridSize) {
        const gridCheck = document.querySelector('.results-grid');
        if (gridCheck) return;
        const gridContainer = document.createElement('div');
        // const gridContainer = document.querySelector('.results-grid');
        gridContainer.className = 'results-grid';

        document.body.append(gridContainer);

        for (let i=0; i<gridSize; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            gridContainer.append(row);
            row.dataset.x = i;

            for (let j=0; j<gridSize; j++) {
                const box = document.createElement('div');
                box.className = 'box';
                row.append(box);
                box.dataset.y = j;
            }
        }

        gridContainer.classList.add('visible');
    } 
}