type CelestialBody = {
  id: string;
  ringClassName: string;
  tokenClassName: string;
  extRadius: number;
  intRadius: number;
  spanAngle: number;
  centerAngle: number;
};

export const Saturn = {
  args: {
    id: "Saturn",
    ringClassName: "fill-slate-600",
    tokenClassName: "fill-slate-400",
    extRadius: 100,
    intRadius: 85,
    spanAngle: 360 * (1 / 36),
    centerAngle: 0,
  },
};

export const Jupiter = {
  args: {
    id: "Jupiter",
    className: "fill-orange-300",
    extRadius: 85,
    intRadius: 70,
  },
};
export const Jupiter = {
  args: {
    id: "Jupiter",
    className: "fill-amber-600",
    extRadius: 100,
    intRadius: 80,
    spanAngle: 360 * (3 / 48),
    centerAngle: 360 * (1.5 / 48),
  },
};

export const Mars = {
  args: {
    id: "Mars",
    className: "fill-red-400",
    extRadius: 70,
    intRadius: 55,
  },
};
export const Mars = {
  args: {
    id: "Mars",
    className: "fill-red-500",
    extRadius: 70,
    intRadius: 55,
    spanAngle: 360 * (3 / 24),
    centerAngle: 360 * (1.5 / 24),
  },
};

export const Venus = {
  args: {
    id: "Venus",
    className: "fill-green-200",
    extRadius: 55,
    intRadius: 40,
  },
};
export const Venus = {
  args: {
    id: "Venus",
    className: "fill-green-600",
    extRadius: 55,
    intRadius: 40,
    spanAngle: 360 * (5 / 24),
    centerAngle: 360 * (2.5 / 24),
  },
};

export const Mercury = {
  args: {
    id: "Mercury",
    className: "fill-violet-200",
    extRadius: 40,
    intRadius: 25,
  },
};
export const Mercury = {
  args: {
    id: "Mercury",
    className: "fill-violet-500",
    extRadius: 40,
    intRadius: 25,
    spanAngle: 360 * (7 / 24),
    centerAngle: 360 * (3.5 / 24),
  },
};
