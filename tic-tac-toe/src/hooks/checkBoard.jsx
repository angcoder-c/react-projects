const checkBoard = (board, char) => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6] 
    ];

    const winningCombinationsFilter = winningCombinations.filter(row=>{
        const [a, b, c] = row
        if (board[a]===char && board[b]===char && board[c]===char){
            return true
        }
        return false
    })

    return { win : winningCombinationsFilter.length>0, char : char}
}

export default checkBoard