import { useState, useRef } from 'react';

const useSelectedElement = (initialState) => {
    //const [selectedElement, setSelectedElement] = useState(initialState);
    const selectedElement = useRef(initialState);
    const [redraw, setRedraw] = useState(false);

    const handleSetSelectedElement = (element) => {
        //console.log('before handle element', element);

        if (element) {
            sessionStorage.setItem(
                'selectedElementId',
                JSON.stringify(element.id)
            );
            
            //console.log('set', element.coordinates);
            //console.log('array', Array.from(element.coordinates));
            //console.log('json', JSON.stringify(Array.from(element.coordinates)));

            sessionStorage.setItem(
                'selectedElementCoordinates',
                JSON.stringify(Array.from(element.coordinates))
            );

            sessionStorage.setItem(
                'selectedElementColour',
                JSON.stringify(element.colour)
            );

            sessionStorage.setItem(
                'selectedElementWidth',
                JSON.stringify(element.width)
            );
        }

        console.log('handle element', element);
        //setSelectedElement(element);
        selectedElement.current = element;
    };

    return {
        selectedElement,
        setSelectedElement: handleSetSelectedElement,
        redraw: redraw,
        setRedraw: setRedraw
    };
};

export { useSelectedElement };
