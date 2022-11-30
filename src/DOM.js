import './style.css';
import { startRoute } from './main';
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
                
                // const modalTest = document.createElement('div');
                // modalTest.textContent = j;
                // modalTest.className = 'modal';
                // box.append(modalTest)
                box.addEventListener('click', () => {
                    const coordinate = `${row.dataset.x},${box.dataset.y}`;
                    this.coordinateModal(box, coordinate);
                    startRoute(coordinate, box);
                })
            }
        }

    }

    coordinateModal(container, coordinate) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.textContent = coordinate;

        container.append(modal);
    }
}