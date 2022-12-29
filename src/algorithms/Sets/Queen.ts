export class Queen {
  public queen: number[] = [];
  public solutions: number[][] = [];
  public isOK(row = 0): boolean {
    const { queen } = this;
    for (let i = 0; i < row; i++) {
      if (queen[row] === queen[i] || queen[row] + row === queen[i] + i || queen[row] - row === queen[i] - i) return false;
    }
    return true;
  }
  public backTracking(row = 0, n = 8): number[] {
    const { queen } = this;
    if (row !== n) {
      for (let column = 0; column < n; column++) {
        queen[row] = column;
        if (this.isOK(row)) {
          if (row === n - 1) {
            this.solutions.push([...queen]);
          }
          this.backTracking(row + 1, n);
        }
      }
    }
    return queen;
  }
}

const Q = new Queen();
Q.backTracking(0, 8);
console.log(Q.solutions);
Q.solutions = [];
Q.backTracking(0, 4);
console.log(Q.solutions);