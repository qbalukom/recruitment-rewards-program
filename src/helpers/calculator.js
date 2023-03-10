export function calculateBonus(value, thresholds) {
  const [, result] = thresholds.filter(item => item.threshold < value)
    .reverse()
    .reduce(([remainder, totalBonus], { threshold, bonus }) => {
      const diff = remainder - threshold;
      return [threshold, totalBonus + diff * bonus];
    }, [value, 0]);
  return result;
}

export function addBonuses(items, thresholds) {
  return items.map(item => ({
    ...item,
    bonus: calculateBonus(item.amount, thresholds),
  }));
}

export function groupByMonth(items) {
  const grouped = items.reduce((acc, item) => {
    const [, month] = item.date.match(/^([0-9]*-[0-9]*)-/);
    acc[month] = {
      month,
      bonus: (acc[month]?.bonus ?? 0) + item.bonus,
      transactions: [
        ...(acc[month]?.transactions ?? []),
        item,
      ],
    }
    return acc;
  }, {});
  return Object.values(grouped)
    .map(item => ({
      ...item,
      transactions: item.transactions
        .sort((a, b) => a.date > b.date ? -1 : 1)
    }))
    .sort((a, b) => a.month > b.month ? -1 : 1);
}

export function totalBonus(items) {
  return items.reduce((acc, item) => acc + item.bonus, 0)
}
