const gameConstants = {
    field: {
        width: 10,
        height: 22,
    },
    visible: {
        width: 10,
        height: 20,
    },
    cell: {
        width: 10,
        height: 10,
    },
    tetriminos: [
        {
            // I
            color: 'cyan',
            center: { x: 1.5, y: 0.5, },
            offsetFromCenter: { x: -2, y: 0, },
            shape: [
                { x: 0, y: 0, },
                { x: 1, y: 0, },
                { x: 2, y: 0, },
                { x: 3, y: 0, },
            ],
        },
        {
            // O
            color: 'yellow',
            center: { x: 0.5, y: 0.5, },
            offsetFromCenter: { x: -1, y: 0, },
            shape: [
                { x: 0, y: 0, },
                { x: 1, y: 0, },
                { x: 0, y: 1, },
                { x: 1, y: 1, },
            ],
        },
        {
            // T
            color: 'purple',
            center: { x: 1, y: 0, },
            offsetFromCenter: { x: -2, y: 0, },
            shape: [
                { x: 0, y: 0, },
                { x: 1, y: 0, },
                { x: 2, y: 0, },
                { x: 1, y: 1, },
            ],
        },
        {
            // S
            color: 'green',
            center: { x: 1, y: 0, },
            offsetFromCenter: { x: -2, y: 0, },
            shape: [
                { x: 0, y: 0, },
                { x: 1, y: 0, },
                { x: 1, y: 1, },
                { x: 2, y: 1, },
            ],
        },
        {
            // Z
            color: 'red',
            center: { x: 1, y: 0, },
            offsetFromCenter: { x: -2, y: 0, },
            shape: [
                { x: 0, y: 1, },
                { x: 1, y: 1, },
                { x: 1, y: 0, },
                { x: 2, y: 0, },
            ],
        },
        {
            // J
            color: 'blue',
            center: { x: 1, y: 0, },
            offsetFromCenter: { x: -2, y: 0, },
            shape: [
                { x: 0, y: 1, },
                { x: 0, y: 0, },
                { x: 1, y: 0, },
                { x: 2, y: 0, },
            ],
        },
        {
            // L
            color: 'orange',
            center: { x: 1, y: 0, },
            offsetFromCenter: { x: -2, y: 0, },
            shape: [
                { x: 0, y: 0, },
                { x: 1, y: 0, },
                { x: 2, y: 0, },
                { x: 2, y: 1, },
            ],
        },
    ],
    backgroundColor: 'black',
};

export default gameConstants;
