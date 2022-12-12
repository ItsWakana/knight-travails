import './style.css';
import { startRoute } from './main';
import knightIcon from './assets/knight.svg';

export class UI {

    static gridSize = 8;

    static renderUI() {
        this.createGrid();
    }

    static createGrid(resultGrid = false) {
        const gridContainer = document.createElement('div');

        if (resultGrid) {
            gridContainer.className = 'results-grid';
        } else {
            gridContainer.className = 'container';
        } 
        document.body.append(gridContainer);

        for (let i=0; i<this.gridSize; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            gridContainer.append(row);
            row.dataset.x = i;

            for (let j=0; j<this.gridSize; j++) {
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

    static displayKnightMovesOnClick(box, row, container) {

        box.addEventListener('click', () => {
            if (container.dataset.pathFinished === 'true') return;
            const coordinate = `${row.dataset.x},${box.dataset.y}`;
            this.displayKnightOnGrid(knightIcon, box);
            const route = startRoute(coordinate, box);
            if (route) {
                ResultGrid.route = route;
                this.displayResult(route)
            }
            this.coordinateModal(box, coordinate, container);
        });
    }
    
    static coordinateModal(container, coordinate, gridContainer) {
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

    static displayResult(result) {
        const displayContainer = document.createElement('div');

        const displayResult = document.createElement('p');
        const displayMoves = document.createElement('p');

        displayResult.textContent = `You made it in ${result.length -1} moves.`;
        for (let move of result) {
            displayMoves.textContent += ` [${move}] =>`;
        }
        const chop = displayMoves.textContent.substring(0,displayMoves.textContent.length -2);
        displayMoves.textContent = chop;

        
        document.body.append(displayContainer);
        displayContainer.append(displayResult, displayMoves);
        this.renderResultsButton(displayContainer);
    }

    static displayKnightOnGrid(icon, square) {
        const knightIcon = new Image();
        knightIcon.src = icon;
        knightIcon.id = 'knight';

        square.appendChild(knightIcon);
    }

    static renderResultsButton(container) {
        const button = document.createElement('button');
        button.className = 'results-button';
        button.textContent = 'See moves';
        button.addEventListener('click', () => {
            this.visualResultModal();
        })
        container.appendChild(button);
    }

    static visualResultModal() {
        ResultGrid.makeGrid();
        // ResultGrid.displayPathsOnGrid(ResultGrid.route);
        const modal = document.querySelector('.results-grid');
        modal.classList.add('visible');


        const overlay = document.getElementById('overlay')
        overlay.classList.add('active');
        overlay.addEventListener('click', () => {
            // ResultGrid.removeGrid();
        });
    }
}

class ResultGrid {

    static gridSize = 8;

    static makeGrid() {
        const routeArray = ResultGrid.route; //this data needs to be imported from our logic module and not here.
        let counter = 1;
        const gridCheck = document.querySelector('.results-grid');
        if (gridCheck) return;
        const gridContainer = document.createElement('div');
        gridContainer.className = 'results-grid';

        const exitButton = document.createElement('button');
        exitButton.textContent = 'Close';

        gridContainer.appendChild(exitButton);

        exitButton.addEventListener('click', () => {
            this.removeGrid(gridContainer);
            this.toggleOverlay();
        });
        document.body.append(gridContainer);


        console.log(routeArray);
        for (let i=0; i<this.gridSize; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            gridContainer.append(row);

            for (let j=0; j<this.gridSize; j++) {
                const box = document.createElement('div');
                box.className = 'box';
                row.append(box);
                box.dataset.x = i;
                box.dataset.y = j;
            }
        }

        this.displayPathsOnGrid(routeArray);

        gridContainer.classList.add('visible');
    }
    
    static displayPathsOnGrid(array) {

        const boxes = document.querySelectorAll('.box');

        let counter = 0;

        for (let coordinate of array) {
            boxes.forEach((box) => {
                if (box.dataset.x === coordinate[0] && box.dataset.y === coordinate[2]) {
                    box.textContent = counter;
                    box.style.backgroundColor = 'lightblue';

                    if (counter === 0) {
                        box.textContent = 'S';
                        box.style.backgroundColor = 'green';
                    }
                    counter++;
                }
            })
        }
    }

    static removeGrid(container) {
        const body = document.body;

        body.removeChild(container);


    }

    static toggleOverlay() {
        const overlay = document.querySelector('#overlay');

        if (overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        } else {
            overlay.classList.add('active');
        }
    }
}
