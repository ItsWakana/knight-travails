import './style.css';
import { startRoute, finishedRoute, setPositionsToDefault } from './routeLogic';
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
                    box.addEventListener('click', () => {
                        this.makeMove(box, row, gridContainer);
                    });
                }

            }
        }

    }

    static makeMove(box, row, container) {
        if (container.dataset.pathFinished === 'true') return;
        const coordinate = `${row.dataset.x},${box.dataset.y}`;
        const route = startRoute(coordinate, box);
        this.displayKnightOnGrid(knightIcon, box);

        if (route) {
            console.log(route);
            finishedRoute = route;
            this.displayResult(route);
        }
        this.coordinateModal(box, coordinate, container);
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
        displayContainer.className = 'text-result-container';

        const displayResult = document.createElement('p');

        displayResult.textContent = `You made it in ${result.length -1} moves.`;
        let counter = 0;
        displayContainer.appendChild(displayResult);

        for (let move of result) {
            const displayMove = document.createElement('p');

            if (counter === 0) {
                displayMove.textContent = `S: [${move}] `;
                displayContainer.appendChild(displayMove);
                counter++;
            } else {
            displayMove.textContent = `${counter++}: [${move}] `;
            displayContainer.appendChild(displayMove);
            }
        }
        
        document.body.append(displayContainer);
        this.renderResultsButton(displayContainer);
    }

    static displayKnightOnGrid(icon, square) {
        const knightIcon = new Image();
        knightIcon.src = icon;
        knightIcon.id = 'knight';

        square.appendChild(knightIcon);
    }

    static renderResultsButton(container) {
        const detailsButton = document.createElement('button');
        detailsButton.className = 'results-button';
        detailsButton.textContent = 'See moves';

        const newPathButton = document.createElement('button');
        newPathButton.className = 'restart-button';
        newPathButton.textContent = 'New path';

        detailsButton.addEventListener('click', () => {
            this.visualResultModal();
        });

        newPathButton.addEventListener('click', () => {
            this.startNewRoute();
        })
        container.append(detailsButton, newPathButton);
    }

    static visualResultModal() {
        ResultGrid.makeGrid();
        const modal = document.querySelector('.results-grid');
        modal.classList.add('visible');


        const overlay = document.getElementById('overlay');
        overlay.classList.add('active');
    }

    static startNewRoute() {
        const container = document.querySelector('.container');
        this.clearBoard();
        setPositionsToDefault();
        this.renderUI();
    }

    static clearBoard() {
        const body = document.body;
        const overlay = document.getElementById('overlay');
        while (body.hasChildNodes()) {
            if (body.lastChild === overlay) return;
            body.removeChild(body.lastChild);
        }
    }
}

class ResultGrid {

    static gridSize = 8;

    static makeGrid() {
        const gridCheck = document.querySelector('.results-grid');
        if (gridCheck) return;
        const gridContainer = document.createElement('div');
        gridContainer.className = 'results-grid';

        const exitButton = document.createElement('button');
        exitButton.className = 'close-button';
        exitButton.textContent = 'Close';

        gridContainer.appendChild(exitButton);

        exitButton.addEventListener('click', () => {
            this.removeElement(gridContainer, exitButton);
            this.toggleOverlay();
        });

        document.body.append(gridContainer);


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

        this.displayPathsOnGrid(finishedRoute);

        gridContainer.classList.add('visible');
    }
    
    static displayPathsOnGrid(array) {

        const boxes = document.querySelectorAll('.box');

        let counter = 0;

        for (let coordinate of array) {
            boxes.forEach((box) => {
                if (box.dataset.x === coordinate[0] && box.dataset.y === coordinate[2]) {
                    box.textContent = counter;
                    box.style.backgroundColor = 'white';

                    if (counter === 0) {
                        box.textContent = 'S';
                        box.style.backgroundColor = 'rgb(8, 22, 36)';
                        box.style.color = 'white';
                    }
                    counter++;
                }
            })
        }
    }

    static removeElement(container, button) {
        const body = document.body;

        body.removeChild(container);

        if (button) {
            container.removeChild(button);
        }


    }

    static toggleOverlay() {
        const overlay = document.querySelector('#overlay');

        if (overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        }
    }
}
