export type LiquidColor = 'sapphire' | 'emerald' | 'amber' | 'amethyst';

export interface Tube {
  id: number;
  layers: LiquidColor[];
}

export const TUBE_CAPACITY = 4;

export const COLOR_STYLES: Record<
  LiquidColor,
  { name: string; bg: string; text: string; glow: string; border: string }
> = {
  sapphire: {
    name: 'Sapphire Blue',
    bg: 'bg-gradient-to-t from-blue-700 via-blue-500 to-sky-400',
    text: 'text-sky-300',
    glow: 'rgba(56, 189, 248, 0.5)',
    border: 'border-sky-400/40',
  },
  emerald: {
    name: 'Emerald Green',
    bg: 'bg-gradient-to-t from-emerald-700 via-emerald-500 to-teal-400',
    text: 'text-emerald-300',
    glow: 'rgba(52, 211, 153, 0.5)',
    border: 'border-emerald-400/40',
  },
  amber: {
    name: 'Amber Gold',
    bg: 'bg-gradient-to-t from-amber-700 via-amber-500 to-yellow-300',
    text: 'text-amber-300',
    glow: 'rgba(251, 191, 36, 0.5)',
    border: 'border-amber-400/40',
  },
  amethyst: {
    name: 'Royal Purple',
    bg: 'bg-gradient-to-t from-purple-700 via-purple-500 to-fuchsia-400',
    text: 'text-purple-300',
    glow: 'rgba(192, 132, 252, 0.5)',
    border: 'border-purple-400/40',
  },
};

/**
 * Returns an initial solvable puzzle with 4 tubes:
 * 2 mixed color tubes, 1 tube with mixed layers, and 1 empty tube for sorting.
 */
export function createInitialPuzzle(): Tube[] {
  return [
    {
      id: 1,
      // bottom to top
      layers: ['sapphire', 'emerald', 'sapphire', 'emerald'],
    },
    {
      id: 2,
      layers: ['emerald', 'sapphire', 'amber', 'amber'],
    },
    {
      id: 3,
      layers: ['amber', 'amber', 'emerald', 'sapphire'],
    },
    {
      id: 4,
      layers: [], // Empty working tube
    },
    {
      id: 5,
      layers: [], // Second working tube for smooth casual play
    },
  ];
}

export function canPour(
  tubes: Tube[],
  fromIndex: number,
  toIndex: number,
  capacity: number = TUBE_CAPACITY
): boolean {
  if (fromIndex === toIndex) return false;
  const source = tubes[fromIndex];
  const target = tubes[toIndex];

  if (!source || !target) return false;
  if (source.layers.length === 0) return false;
  if (target.layers.length >= capacity) return false;

  const topSourceColor = source.layers[source.layers.length - 1];

  // Can always pour into an empty tube
  if (target.layers.length === 0) return true;

  const topTargetColor = target.layers[target.layers.length - 1];
  return topSourceColor === topTargetColor;
}

export function pourLiquid(
  tubes: Tube[],
  fromIndex: number,
  toIndex: number,
  capacity: number = TUBE_CAPACITY
): { newTubes: Tube[]; pouredCount: number } {
  if (!canPour(tubes, fromIndex, toIndex, capacity)) {
    return { newTubes: tubes, pouredCount: 0 };
  }

  // Deep clone
  const newTubes: Tube[] = tubes.map((t) => ({
    ...t,
    layers: [...t.layers],
  }));

  const source = newTubes[fromIndex];
  const target = newTubes[toIndex];
  const colorToMove = source.layers[source.layers.length - 1];

  let pouredCount = 0;
  // Move all contiguous top items of the same color that fit in the target
  while (
    source.layers.length > 0 &&
    source.layers[source.layers.length - 1] === colorToMove &&
    target.layers.length < capacity
  ) {
    source.layers.pop();
    target.layers.push(colorToMove);
    pouredCount++;
  }

  return { newTubes, pouredCount };
}

export function checkWinCondition(
  tubes: Tube[],
  capacity: number = TUBE_CAPACITY
): boolean {
  for (const tube of tubes) {
    if (tube.layers.length === 0) {
      continue;
    }
    // Must be completely full
    if (tube.layers.length !== capacity) {
      return false;
    }
    // All layers must match
    const firstColor = tube.layers[0];
    const isUniform = tube.layers.every((c) => c === firstColor);
    if (!isUniform) {
      return false;
    }
  }
  // Check if at least one tube is sorted
  const sortedTubes = tubes.filter(
    (t) => t.layers.length === capacity && t.layers.every((c) => c === t.layers[0])
  );
  return sortedTubes.length > 0;
}
