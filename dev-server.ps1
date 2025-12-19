# Development server startup script
$ErrorActionPreference = "Stop"

Write-Host "Starting Next.js development server..." -ForegroundColor Cyan
Write-Host "Working directory: $PWD" -ForegroundColor Gray

try {
    # Check if node_modules exists
    if (-not (Test-Path "node_modules")) {
        Write-Host "Installing dependencies..." -ForegroundColor Yellow
        npm install
    }
    
    # Start the dev server
    Write-Host "`nStarting server on http://localhost:3000" -ForegroundColor Green
    Write-Host "Press Ctrl+C to stop the server`n" -ForegroundColor Yellow
    
    npm run dev
} catch {
    Write-Host "Error starting server: $_" -ForegroundColor Red
    Write-Host "`nTrying alternative method..." -ForegroundColor Yellow
    & ".\node_modules\.bin\next.cmd" dev
}

