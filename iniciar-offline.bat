@echo off
chcp 65001 >nul
title Portfolio Evelin Puri - Modo Offline
cd /d "%~dp0"

start "" "http://localhost:8080"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0servidor-local.ps1"
