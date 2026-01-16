# App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Proxy

To prevent CORS errors, the Angular development server is configured with a proxy so that the API server (see below) can be accessed at `/api/*`.

## API server

To start the REST API server, run:

```bash
npm run server
```

Once the API server is running, the GeoJSON files can be accessed at `http://localhost:8080/api/*`.
