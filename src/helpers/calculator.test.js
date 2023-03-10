import {
  calculateBonus,
  addBonuses,
  groupByMonth,
  totalBonus,
} from './calculator';

describe('calculateBonus', () => {
  it('should return 0 with no thresholds', () => {
    const value = calculateBonus(100, []);
    expect(value).toBe(0);
  });

  it('should return 0 when below any threshold', () => {
    const value = calculateBonus(100, [
      { threshold: 200, bonus: 1 },
    ]);
    expect(value).toBe(0);
  });

  it('should return proper value when above threshold', () => {
    const value = calculateBonus(100, [
      { threshold: 60, bonus: 1 },
    ]);
    expect(value).toBe(40);
  });

  it('should return proper value when between thresholds', () => {
    const value = calculateBonus(100, [
      { threshold: 60, bonus: 1 },
      { threshold: 120, bonus: 2 },
    ]);
    expect(value).toBe(40);
  });

  it('should properly sum when above multiple thresholds', () => {
    const value1 = calculateBonus(200, [
      { threshold: 60, bonus: 1 },
      { threshold: 120, bonus: 2 },
    ]);
    expect(value1).toBe(220);

    const value2 = calculateBonus(200, [
      { threshold: 60, bonus: 1 },
      { threshold: 120, bonus: 2 },
      { threshold: 180, bonus: 3 },
    ]);
    expect(value2).toBe(240);
  });
});

describe('addBonuses', () => {
  it('should allow an empty list', () => {
    const result = addBonuses([], [
      { threshold: 60, bonus: 1 },
      { threshold: 120, bonus: 2 },
    ]);

    expect(result).toEqual([]);
  });

  it('should add bonuses', () => {
    const result = addBonuses([
      { amount: 100 },
      { amount: 200 },
    ], [
      { threshold: 60, bonus: 1 },
      { threshold: 120, bonus: 2 },
    ]);
    expect(result).toEqual([
      { amount: 100, bonus: 40 },
      { amount: 200, bonus: 220 },
    ])
  });
});

describe('groupByMonth', () => {
  it('should allow an empty list', () => {
    const result = groupByMonth([]);
    expect(result).toEqual([]);
  });

  it('should group multiple items into a single month', () => {
    const result = groupByMonth([
      { date: '2023-01-01', bonus: 0 },
      { date: '2023-01-02', bonus: 0 },
    ]);
    expect(result).toEqual([
      {
        month: '2023-01',
        bonus: 0,
        transactions: [
          { date: '2023-01-02', bonus: 0 },
          { date: '2023-01-01', bonus: 0 },
        ],
      },
    ]);
  });

  it('should group multiple items into separate months', () => {
    const result = groupByMonth([
      { date: '2023-01-01', bonus: 0 },
      { date: '2023-02-02', bonus: 0 },
    ]);
    expect(result).toEqual([
      {
        month: '2023-02',
        bonus: 0,
        transactions: [
          { date: '2023-02-02', bonus: 0 },
        ],
      },
      {
        month: '2023-01',
        bonus: 0,
        transactions: [
          { date: '2023-01-01', bonus: 0 },
        ],
      },
    ]);
  });

  it('should sum up bonuses', () => {
    const result = groupByMonth([
      { date: '2023-01-01', bonus: 10 },
      { date: '2023-01-02', bonus: 15 },
      { date: '2023-02-02', bonus: 20 },
    ]);
    expect(result).toEqual([
      {
        month: '2023-02',
        bonus: 20,
        transactions: [
          { date: '2023-02-02', bonus: 20 },
        ],
      },
      {
        month: '2023-01',
        bonus: 25,
        transactions: [
          { date: '2023-01-02', bonus: 15 },
          { date: '2023-01-01', bonus: 10 },
        ],
      },
    ]);
  });
});

describe('totalBonus', () => {
  it('should allow an empty list', () => {
    const value = totalBonus([]);
    expect(value).toBe(0);
  });

  it('should sum up bonuses', () => {
    const value = totalBonus([
      { bonus: 5 },
      { bonus: 7 },
      { bonus: 2 },
    ]);
    expect(value).toBe(14);
  });
});
