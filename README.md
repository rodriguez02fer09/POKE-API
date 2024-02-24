# Aplicación de Pokémon

## Clonar repositortio

Corre el siguiente comando teniendo git intalado

```bash
git clone git@github.com:rodriguez02fer09/POKE-API.git
```

## Instalacion de dependencias del proyecto

Para instalar la aplicación de Pokémon, puedes utilizar npm.

```bash
npm i 
```

##  Uso
Para iniciar la aplicación, ejecuta:

```bash
npm run dev
```
Esto abrirá la aplicación de Pokémon en tu navegador.


## Contribuciones
Se aceptan solicitudes de extracción. Para cambios importantes, abre primero un problema para discutir lo que te gustaría cambiar.

Asegúrate de actualizar las pruebas según corresponda.


##  Componentes 

![Component list ]([https://drive.google.com/file/d/1v01fZ2AvniyUWZNxH2hLo0lRGre2c64u](https://private-user-images.githubusercontent.com/54679720/307490596-5a2c79c3-538c-485a-b148-d74b05efefab.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg3NDQ2NTYsIm5iZiI6MTcwODc0NDM1NiwicGF0aCI6Ii81NDY3OTcyMC8zMDc0OTA1OTYtNWEyYzc5YzMtNTM4Yy00ODVhLWIxNDgtZDc0YjA1ZWZlZmFiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI0VDAzMTIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU1ZDhkM2M1ODE0NDk1ODA2NDg1MzQ4NzVlNjBlZjY3YjJjYjZiMWIzZGZmOTQ4MDUxNWQyNmZmM2YyNjU4NmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.hKAuC_tbXP4fzjQxwBvR5W3IY3EmvoqzXE0Fpkqvags)https://private-user-images.githubusercontent.com/54679720/307490596-5a2c79c3-538c-485a-b148-d74b05efefab.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg3NDQ2NTYsIm5iZiI6MTcwODc0NDM1NiwicGF0aCI6Ii81NDY3OTcyMC8zMDc0OTA1OTYtNWEyYzc5YzMtNTM4Yy00ODVhLWIxNDgtZDc0YjA1ZWZlZmFiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI0VDAzMTIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU1ZDhkM2M1ODE0NDk1ODA2NDg1MzQ4NzVlNjBlZjY3YjJjYjZiMWIzZGZmOTQ4MDUxNWQyNmZmM2YyNjU4NmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.hKAuC_tbXP4fzjQxwBvR5W3IY3EmvoqzXE0Fpkqvags)
![Component detailt]([https://example.com/pokemon_logo.png](https://private-user-images.githubusercontent.com/54679720/307490601-57b46e84-dd77-47f6-bc54-480421c09862.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg3NDQ2NTYsIm5iZiI6MTcwODc0NDM1NiwicGF0aCI6Ii81NDY3OTcyMC8zMDc0OTA2MDEtNTdiNDZlODQtZGQ3Ny00N2Y2LWJjNTQtNDgwNDIxYzA5ODYyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI0VDAzMTIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU2NjU3Y2ZjYzc1ZmYxNDlhMTMyODQzZTZjZTllODEyY2VkZjFhMjc2MzYxM2VhYTc1MzFhZTEyNmI2MmYxMWImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.tLD7HWfrtV1396e-gjqlm1eNxHHNNDRam9JVc_ap3F0)https://private-user-images.githubusercontent.com/54679720/307490601-57b46e84-dd77-47f6-bc54-480421c09862.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg3NDQ2NTYsIm5iZiI6MTcwODc0NDM1NiwicGF0aCI6Ii81NDY3OTcyMC8zMDc0OTA2MDEtNTdiNDZlODQtZGQ3Ny00N2Y2LWJjNTQtNDgwNDIxYzA5ODYyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI0VDAzMTIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU2NjU3Y2ZjYzc1ZmYxNDlhMTMyODQzZTZjZTllODEyY2VkZjFhMjc2MzYxM2VhYTc1MzFhZTEyNmI2MmYxMWImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.tLD7HWfrtV1396e-gjqlm1eNxHHNNDRam9JVc_ap3F0)
![Component chart]([https://example.com/pokemon_logo.png](https://private-user-images.githubusercontent.com/54679720/307490605-b26d76dd-5219-4334-9c69-903ae6000bdd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg3NDQ2NTYsIm5iZiI6MTcwODc0NDM1NiwicGF0aCI6Ii81NDY3OTcyMC8zMDc0OTA2MDUtYjI2ZDc2ZGQtNTIxOS00MzM0LTljNjktOTAzYWU2MDAwYmRkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI0VDAzMTIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNhZmU2NTBmYmM5ZDhiYzdlZjI4NDA5YTI4NmZmZjcwZTE3ZWEzN2UzNmJkNmJjMWEzNzMyMTQ5ZDU1OTRlZDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.gWLGdBL2QIEHi6UAgCrA1bVbhq1BJ4tJ_VK9KJ7RzbY)https://private-user-images.githubusercontent.com/54679720/307490605-b26d76dd-5219-4334-9c69-903ae6000bdd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg3NDQ2NTYsIm5iZiI6MTcwODc0NDM1NiwicGF0aCI6Ii81NDY3OTcyMC8zMDc0OTA2MDUtYjI2ZDc2ZGQtNTIxOS00MzM0LTljNjktOTAzYWU2MDAwYmRkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI0VDAzMTIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNhZmU2NTBmYmM5ZDhiYzdlZjI4NDA5YTI4NmZmZjcwZTE3ZWEzN2UzNmJkNmJjMWEzNzMyMTQ5ZDU1OTRlZDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.gWLGdBL2QIEHi6UAgCrA1bVbhq1BJ4tJ_VK9KJ7RzbY)

## License

[MIT](https://choosealicense.com/licenses/mit/)
