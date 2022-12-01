import './style.css';
import { startRoute } from './main';
import knightIcon from './assets/knight.svg';
export class Grid {

    constructor(size) {
        this.size = size;
    }

    createGrid() {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'container';
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
         
                box.addEventListener('click', () => {
                    if (gridContainer.dataset.pathFinished === 'true') return;
                    const coordinate = `${row.dataset.x},${box.dataset.y}`;
                    this.displayKnightOnGrid(knightIcon, box);
                    const route = startRoute(coordinate, box);
                    if (route) {
                        this.displayResult(route)
                    }
                    this.coordinateModal(box, coordinate, gridContainer);
                });
            }
        }
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
    }

    displayKnightOnGrid(icon, square) {
        const knightIcon = new Image();
        knightIcon.src = icon;
        knightIcon.id = 'knight';

        square.appendChild(knightIcon);
    }

    visualResultModal() {
        const modal = document.getElementById('results-grid');

        
    }
}