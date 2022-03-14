import Table from './Table';

const table1 = new Table('table1', 9);
const table2 = new Table('table2', 9);

const tables = [table1, table2];

function getTable(tableName: string): Table | null {
  for (const table of tables) {
    if (table.tableName == tableName) {
      return table;
    }
  }
  return null;
}

export default { getTable };
