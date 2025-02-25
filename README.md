# Prayana Web App

This guide provides step-by-step instructions to set up and run a Vite + React + TypeScript app locally using PowerShell and a provided ZIP file.

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [Git](https://git-scm.com/) (Optional, for version control)
- A terminal with PowerShell (Windows)

## Setup Instructions

### 1. Extract the ZIP File
1. Download the ZIP file 'prayana_ras' which contains files for 'PRAYANA WEB APP'.
2. Open PowerShell and navigate to the directory where the ZIP file is located.
3. Extract the ZIP file using the following command:
   ```powershell
   Expand-Archive -Path .\your_project.zip -DestinationPath .\your_project -Force
   ```
4. Navigate into the project directory:
   ```powershell
   cd your_project
   ```

### 2. Install Dependencies
Run the following command in PowerShell to install all required dependencies:
```powershell
npm install
```

### 3. Start the Development Server
To start the Vite development server, run:
```powershell
npm run dev
```
This will provide a local URL (e.g., `http://localhost:5173/`) where you can view your app.

### 4. Build the Project (Optional)
If you want to create a production build, use:
```powershell
npm run build
```
The build files will be generated inside the `dist/` directory.

### 5. Run the Production Build (Optional)
To preview the production build locally, install `serve` (if not installed) and run:
```powershell
npm install -g serve
serve -s dist
```
Then, open the provided URL in your browser.

## Troubleshooting
- If you encounter permission issues, try running PowerShell as an administrator.
- If `npm install` fails, ensure you have a stable internet connection and try running `npm cache clean --force` before reinstalling.

## Additional Notes
- Modify `vite.config.ts` as needed for custom configurations.
- Update `.env` files if your project requires environment variables.

!!!Enjoy Prayana Web APP!!!