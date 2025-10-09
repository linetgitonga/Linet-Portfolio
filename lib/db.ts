import Database from "better-sqlite3"
import path from "path"

let db: Database.Database | null = null

export function getDatabase() {
  if (!db) {
    const dbPath = path.join(process.cwd(), "data", "")
    db = new Database(dbPath)
    db.pragma("journal_mode = WAL")
  }
  return db
}

export interface Contact {
  id: number
  name: string
  email: string
  message: string
  created_at: string
  read: number
}

// Initialize database with schema
export function initializeDatabase() {
  const db = getDatabase()

  db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      read INTEGER DEFAULT 0
    );

    CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_contacts_read ON contacts(read);
  `)
}

// Ensure database is initialized on import
initializeDatabase()



    // // Ensure the data directory exists so better-sqlite3 can open the DB file.
    // try {
    //   if (!fs.existsSync(dataDir)) {
    //     fs.mkdirSync(dataDir, { recursive: true })
    //   }
    // } catch (err) {
    //   console.error('Failed to create data directory:', err)
    //   throw err
    // }

    // const dbPath = path.join(dataDir, "portfolio.db")