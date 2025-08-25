@echo off
title Iniciando Entorno de Desarrollo - ProyectoBlog
color 0a

:: Iniciar MongoDB
start "MongoDB" cmd.exe /k "cd /d "C:\Program Files\MongoDB\Server\8.0\bin" && mongod.exe"

:: Iniciar API Node.js (backend)
start "API Node.js" cmd.exe /k "cd /d "C:\Users\innov\Documents\ProyectoBlog\api-rest-node" && npm start"

:: Iniciar Frontend (Vite/React)
start "Frontend Dev" cmd.exe /k "cd /d "C:\Users\innov\Documents\ProyectoBlog\laboratorio-front" && npm run dev"

:: Abrir VS Code en la carpeta del proyecto (modificado)
cmd /c start "" "C:\Users\innov\AppData\Local\Programs\Microsoft VS Code\Code.exe" "C:\Users\innov\Documents\ProyectoBlog"

:: Abrir MongoDB Compass (modificado)
cmd /c start "" "C:\Users\innov\AppData\Local\MongoDBCompass\MongoDBCompass.exe"

:: Abrir Postman (modificado)
cmd /c start "" "C:\Users\innov\AppData\Local\Postman\Postman.exe"

:: Abrir Chrome en http://localhost:5173/ (modificado)
timeout /t 5 >nul
cmd /c start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" http://localhost:5173/ https://web.whatsapp.com/ https://www.facebook.com/ https://chat.deepseek.com/a/chat

echo Entorno de desarrollo iniciado correctamente.
pause