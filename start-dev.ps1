# PowerShell script to start the Next.js dev server
# This handles the & character in the folder path properly

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "Starting Next.js development server..." -ForegroundColor Green
npm run dev

