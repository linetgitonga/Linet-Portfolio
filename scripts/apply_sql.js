const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const sqlPath = path.join(__dirname, '001_create_contacts_table.sql');
const dbPath = path.join(process.cwd(), 'db.sqlite3');

if (!fs.existsSync(sqlPath)) {
  console.error('SQL file not found:', sqlPath);
  process.exit(2);
}

const sql = fs.readFileSync(sqlPath, 'utf8');

try {
  const db = new Database(dbPath);
  db.exec('PRAGMA foreign_keys = ON;');
  db.exec(sql);
  db.close();
  console.log('SQL executed successfully on', dbPath);
} catch (err) {
  console.error('Failed to execute SQL:', err);
  process.exit(1);
}
