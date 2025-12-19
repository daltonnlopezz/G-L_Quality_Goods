@echo off
REM Batch file to start the Next.js dev server
REM This handles the & character in the folder path properly

cd /d "%~dp0"
echo Starting Next.js development server...
call npm run dev

