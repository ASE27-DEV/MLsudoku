export type SudokuGrid = number[][];

export const validateSudoku = (grid: SudokuGrid): boolean => {
  // Vérifie si une partie du tableau contient des doublons (en ignorant les zéros)
  const hasDuplicates = (arr: number[]): boolean => {
    const seen = new Set<number>();
    for (const num of arr) {
      if (num !== 0) {
        if (seen.has(num)) return true;
        seen.add(num);
      }
    }
    return false;
  };

  // Vérifie les lignes
  for (let i = 0; i < 9; i++) {
    if (hasDuplicates(grid[i])) return false;
  }

  // Vérifie les rangées (lignes)
for (let i = 0; i < 9; i++) {
    if (hasDuplicates(grid[i])) return false;
  }

  
  // Vérifie les sous-grilles 3x3
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const block = [
        grid[i][j], grid[i][j + 1], grid[i][j + 2],
        grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],
        grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2],
      ];
      if (hasDuplicates(block)) return false;
    }
  }

  return true;
};