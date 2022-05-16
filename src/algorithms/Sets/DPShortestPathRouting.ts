const Points = [
  {
    id: 0,
  },
  {
    id: 1,
    routes: [
      {
        to: 2,
        v: 4,
      },
      {
        to: 3,
        v: 5,
      },
    ],
  },
  {
    id: 2,
    routes: [
      {
        to: 4,
        v: 2,
      },
      {
        to: 5,
        v: 3,
      },
      {
        to: 6,
        v: 6,
      },
    ],
  },
  {
    id: 3,
    routes: [
      {
        to: 5,
        v: 8,
      },
      {
        to: 6,
        v: 7,
      },
      {
        to: 7,
        v: 7,
      },
    ],
  },
  {
    id: 4,
    routes: [
      {
        to: 8,
        v: 5,
      },
      {
        to: 9,
        v: 8,
      },
    ],
  },
  {
    id: 5,
    routes: [
      {
        to: 8,
        v: 4,
      },
      {
        to: 9,
        v: 5,
      },
    ],
  },
  {
    id: 6,
    routes: [
      {
        to: 9,
        v: 3,
      },
      {
        to: 10,
        v: 4,
      },
    ],
  },
  {
    id: 7,
    routes: [
      {
        to: 9,
        v: 8,
      },
      {
        to: 10,
        v: 4,
      },
    ],
  },
  {
    id: 8,
    routes: [
      {
        to: 11,
        v: 3,
      },
      {
        to: 12,
        v: 5,
      },
    ],
  },
  {
    id: 9,
    routes: [
      {
        to: 11,
        v: 6,
      },
      {
        to: 12,
        v: 2,
      },
    ],
  },
  {
    id: 10,
    routes: [
      {
        to: 11,
        v: 1,
      },
      {
        to: 12,
        v: 3,
      },
    ],
  },
  {
    id: 11,
    routes: [
      {
        to: 13,
        v: 4,
      },
    ],
  },
  {
    id: 12,
    routes: [
      {
        to: 13,
        v: 3,
      },
    ],
  },
  {
    id: 13,
  },
];

type Point = typeof Points[number];
function GetSPR(p: Point[], index: number = p.length - 1): number {
  if (index <= 1) {
    return 0;
  }
  const cur = p[index];
  // find pre
  const prevs: number[] = [];
  const prevsV: number[] = [];
  let flag = 0;
  let i = index - 1;
  for (; i >= 1; i--) {
    const node = p[i];
    const { id, routes } = node;
    const prev = routes?.find((r) => r.to === cur.id);
    if (prev) {
      flag = 1; // is prev node
      prevs.push(i);
      prevsV.push(prev.v);
    } else {
      if (flag === 1) {
        break;
      }
    }
  }
  return Math.min(
    ...prevsV.map((val, i) => {
      const index = prevs[i];
      return val + GetSPR(p.slice(0, index + 1));
    })
  );
}

console.log(GetSPR(Points));
