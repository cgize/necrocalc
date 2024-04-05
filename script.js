document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.querySelector('.grid-container');
    const selectedModifiersTable = document.querySelector('.selected-modifiers tbody');
    let currentPopup = null; // Para rastrear el popup actual

    const optionsData = {
        "Increased Chance of Modifiers": { percentage: [100, 200, 300, 500], selected: 0 },
        "Scarcer Chance of Modifiers": { percentage: [50, 100, 300], selected: 0 }
    };

    const hiddenCells = [
        // Coordenadas de las casillas que se ocultan
         "0-3", "0-4", "0-5", "0-6", "0-7", "0-8", "0-9", "0-10", "0-11", "0-12", "0-13", "0-14",
        "1-3", "1-4", "1-5", "1-6", "1-7", "1-8", "1-9",
        "4-14", "4-15",
        "5-4",
        "6-4", "6-5",
        "7-8", "7-9"
    ];

    // Crear la cuadrícula
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 17; col++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.dataset.row = row;
            gridItem.dataset.col = col;
            gridItem.addEventListener('click', function (event) {
                event.stopPropagation();
                showPopup(event.target);
            });

            const cellId = `${row}-${col}`;
            if (hiddenCells.includes(cellId)) {
                gridItem.style.visibility = 'hidden';
            }

            gridContainer.appendChild(gridItem);
        }
    }

    function showPopup(target) {
        // Resto del código del popup...
    }

    function updateSelectedOptions(option, percentage, index) {
        // Resto del código de actualización de opciones seleccionadas...
    }

    function isIncreasedOption(option) {
        return option === "Increased Chance of Modifiers";
    }
});
