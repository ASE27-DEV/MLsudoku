type SudokuGrid = number[][];

const GRID_SIZE = 9;
const SUBGRID_SIZE = 3;

const generateEmptyGrid = (): SudokuGrid => {
  return Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
};

const isValid = (grid: SudokuGrid, row: number, col: number, num: number): boolean => {
  for (let x = 0; x < GRID_SIZE; x++) {
    if (grid[row][x] === num || grid[x][col] === num) {
      return false;
    }
  }

  const startRow = row - row % SUBGRID_SIZE;
  const startCol = col - col % SUBGRID_SIZE;

  for (let i = 0; i < SUBGRID_SIZE; i++) {
    for (let j = 0; j < SUBGRID_SIZE; j++) {
      if (grid[i + startRow][j + startCol] === num) {
        return false;
      }
    }
  }

  return true;
};

const shuffleArray = (array: number[]): number[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const fillGrid = (grid: SudokuGrid): boolean => {
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (grid[row][col] === 0) {
        const nums = shuffleArray([...Array(GRID_SIZE)].map((_, i) => i + 1));
        for (const num of nums) {
          if (isValid(grid, row, col, num)) {
            grid[row][col] = num;
            if (fillGrid(grid)) {
              return true;
            }
            grid[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

const removeNumbers = (grid: SudokuGrid, difficulty: string): SudokuGrid => {
  let attempts;
  switch (difficulty) {
    case 'easy':
      attempts = 30;
      break;
    case 'medium':
      attempts = 40;
      break;
    case 'hard':
      attempts = 50;
      break;
    case 'expert':
      attempts = 60;
      break;
    default:
      attempts = 40;
  }

  while (attempts > 0) {
    let row = Math.floor(Math.random() * GRID_SIZE);
    let col = Math.floor(Math.random() * GRID_SIZE);
    while (grid[row][col] === 0) {
      row = Math.floor(Math.random() * GRID_SIZE);
      col = Math.floor(Math.random() * GRID_SIZE);
    }
    const backup = grid[row][col];
    grid[row][col] = 0;

    const copyGrid = JSON.parse(JSON.stringify(grid)) as SudokuGrid;
    if (!fillGrid(copyGrid)) {
      grid[row][col] = backup;
    } else {
      attempts--;
    }
  }
  return grid;
};

const generateSudokuWithSolution = (difficulty: string = 'easy'): { puzzle: SudokuGrid, solution: SudokuGrid } => {
  const solution = generateEmptyGrid();
  fillGrid(solution);
  const puzzle = JSON.parse(JSON.stringify(solution));
  return { puzzle: removeNumbers(puzzle, difficulty), solution };
};

export { generateSudokuWithSolution, SudokuGrid };
