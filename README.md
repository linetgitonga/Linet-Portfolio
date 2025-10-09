# Creative Portfolio - Linet Muthoni Gitonga

A modern, responsive creative portfolio showcasing impactful software development projects across healthcare, agriculture, tourism, and sustainability sectors in Africa.

![Creative Portfolio Preview](./preview.png)

## Features

- **Responsive Design** - Works seamlessly on all devices
- **Dark/Light Mode** - Theme toggle for user preference
- **Project Showcase** - Display of 6 real-world projects with live demos
- **Contact Form** - SQLite-powered contact management system
- **Admin Dashboard** - Secure interface to manage contact submissions
- **Modern UI** - Smooth animations and glassmorphic design elements
- **Timeline** - Work experience and education history

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [SQLite](https://www.sqlite.org/) - Lightweight database via better-sqlite3
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful icon set
- [Vercel](https://vercel.com) - Deployment platform

## Project Structure

\`\`\`
├── app/
│   ├── actions/          # Server actions for form handling
│   ├── admin/            # Admin dashboard for contact management
│   ├── layout.tsx        # Root layout with theme provider
│   └── page.tsx          # Main portfolio page
├── components/           # Reusable React components
├── lib/                  # Utility functions and database setup
├── scripts/              # SQL scripts for database initialization
├── data/                 # SQLite database storage
└── public/               # Static assets and images
\`\`\`

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/creative-portfolio.git
cd creative-portfolio
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

This will install all required packages including:
- Next.js and React
- Tailwind CSS
- better-sqlite3 for SQLite database
- All other dependencies listed in package.json

### 3. Set Up SQLite Database

The application uses SQLite to store contact form submissions. Initialize the database by running the SQL script:

**Option A: Using the v0 interface (Recommended)**
- Click the "Run Script" button in the v0 interface for `scripts/001_create_contacts_table.sql`

**Option B: Manual setup**

\`\`\`bash
# Create the data directory if it doesn't exist
mkdir -p data

# Run the SQL script using sqlite3 CLI
sqlite3 data/contacts.db < scripts/001_create_contacts_table.sql
\`\`\`

**Option C: Automatic initialization**

The application will automatically create the database and tables on first run if they don't exist. Just start the development server and the database will be initialized.

### 4. Run the Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 5. Access the Admin Dashboard

To view and manage contact form submissions:

1. Navigate to [http://localhost:3000/admin/contacts](http://localhost:3000/admin/contacts)
2. Enter the admin password: `admin123`
3. View, mark as read, or delete contact submissions

**Security Note:** Change the default password in production by modifying the authentication logic in `app/admin/contacts/page.tsx`.

## Database Schema

The SQLite database includes a `contacts` table with the following structure:

| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key (auto-increment) |
| name | TEXT | Contact's full name |
| email | TEXT | Contact's email address |
| message | TEXT | Contact message content |
| is_read | INTEGER | Read status (0 = unread, 1 = read) |
| created_at | TEXT | Timestamp of submission |

## Customization

### Update Personal Information

1. **Profile Picture**: Replace `public/profile-picture.jpg` with your own photo
2. **Personal Details**: Edit `app/page.tsx` to update name, bio, and contact information
3. **Projects**: Modify the projects array in `app/page.tsx` with your own projects
4. **Experience**: Update the timeline data in `components/timeline.tsx`

### Modify Theme Colors

Edit `app/globals.css` to customize the color scheme:

\`\`\`css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other color variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other color variables */
}
\`\`\`

### Change Admin Password

For production, update the password in `app/admin/contacts/page.tsx`:

\`\`\`typescript
const ADMIN_PASSWORD = "your-secure-password-here"
\`\`\`

Consider implementing a more robust authentication system for production use.

## Security Features

- **SQL Injection Prevention**: All database queries use parameterized statements
- **Input Validation**: Form inputs are validated and sanitized
- **XSS Protection**: React's built-in XSS protection
- **Admin Authentication**: Password-protected admin dashboard
- **Error Handling**: Graceful error handling with user-friendly messages

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Configure build settings (Vercel auto-detects Next.js)
5. Click "Deploy"

**Important**: SQLite databases are ephemeral on Vercel. For production, consider:
- Using Vercel Postgres
- Neon Database
- Supabase
- Or another persistent database solution

### Environment Variables

For production deployment, set these environment variables:

\`\`\`env
# Optional: Custom admin password
ADMIN_PASSWORD=your-secure-password

# Optional: Database URL (if using external database)
DATABASE_URL=your-database-url
\`\`\`

## Development Scripts

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
\`\`\`

## Troubleshooting

### Database Issues

**Problem**: "Database file not found" error

**Solution**: Ensure the `data` directory exists and run the SQL initialization script:
\`\`\`bash
mkdir -p data
sqlite3 data/contacts.db < scripts/001_create_contacts_table.sql
\`\`\`

**Problem**: "better-sqlite3 installation failed"

**Solution**: Rebuild the native module:
\`\`\`bash
npm rebuild better-sqlite3
\`\`\`

### Build Issues

**Problem**: TypeScript errors during build

**Solution**: Ensure all dependencies are installed and types are correct:
\`\`\`bash
npm install --save-dev @types/better-sqlite3
npm run build
\`\`\`

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](./LICENSE).

## Contact

**Linet Muthoni Gitonga**
- Email: linetgitonga55@gmail.com
- Phone: +254701606056
- LinkedIn: [linkedin.com/in/linet-gitonga](https://linkedin.com/in/linet-gitonga)
- GitHub: [github.com/linetgitonga](https://github.com/linetgitonga)

## Acknowledgments

- Built with [v0.dev](https://v0.dev) by Vercel
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
