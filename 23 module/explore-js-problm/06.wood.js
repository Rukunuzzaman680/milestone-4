function homeFurniture(chair, table, bed) {
  const perChairWood = 3;
  const perTableWood = 5;
  const perBedWood = 10;

  const chairWood = chair * perChairWood;
  const tableWood = table * perTableWood;
  const bedWood = bed * perBedWood;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}
const totalFurnitureWood = homeFurniture(0, 10, 1);
console.log(totalFurnitureWood);
