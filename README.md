### Prequisites
- docker (https://docs.docker.com/engine/install/)

### Project structure
    .
    ├── src                    #Source code
        ├── app
            ├── Domain1
                ├── domain1.module.ts
            ├── Domain2
                ├── domain2.module.ts
        ├── database
        ├── common
        ├── app.module.ts
        └── main.ts             #Application staring point
    ├── test                    #Unit/integration
    ├── dockerfile
    └── README.md

### Running the application
- rename .env-example to .env
- docker-compose build
- docker-compose up -d

## Debug
- rename .vscode-example to .vscode

- Start the debug with the Debug: api docker setting (check launch.json). The project is setup to debug the application from the docker image running locally
