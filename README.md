# Pokemon-Web

    Angular project aimed at providing the features of the Pokemon challenge.

# Creation of the Project Base Structure

    The steps used to create the project are described below.

## Versions used

    This project was created with npm, node, updated angular-cli and running the following commands:

    Angular CLI: 13.2.6
    Node: 16.13.1
    Package Manager: npm 8.5.4
    OS: win32 x64

## Initial structure

    Command to create the project
    $ ng new pokemon-web

    Access to project folder
    $ cd pokemon-web

    Making the project SSR (Server Side Rendering) which makes it possible to make it readable for SEO
    $ ng add @nguniversal/express-engine

    Making the PWA (Progressive Web App) project capable of behaving like a native application regardless of the platform on which it is used.
    $ ng add @angular/pwa --project pokemon-web

## Script Service Worker no index.html

    Enable application to control network requests, cache those requests to improve performance, and provide offline access to cached content.

<body>
  ...
  <script>
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/ngsw-worker.js').then(function(registration) {
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}).catch(function(err) {
			//registration failed :(
			console.log('ServiceWorker registration failed: ', err);
		});
	}
  </script>
</body>

## Add bootstrap

    Quickly design and customize responsive mobile-first web services.

    $ npm install bootstrap --save

    Change in angular.json

    "styles": [
        "src/styles.scss",
        "./node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": [
        "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ],

## Project folder structure

    /app
    /app/components
    /app/modules
        /home
        /documentation
    /app/services
    /app/shared

## Generation of first components

    $ cd .\src\app\components\
    $ ng g module footer
    $ ng g component footer --module footer --export=true

    $ ng g module header
    $ ng g component header --module header --export=true

    $ cd ..\..\..\src\app\modules\
    $ ng g component home --module app 
    $ ng g component frontend-style --module app
    $ ng g component backend-style --module app
    $ ng g component documentation --module app

    Change app.module.ts

    // Component
    import { FooterModule } from './components/footer/footer.module';
    import { HeaderModule } from './components/header/header.module';

    imports: [
        ...
        HeaderModule,
        FooterModule
    ]

## Generation services

    $ cd ..\services\
    $ ng g service pokemon-service
    $ ng g service stick-service
    $ ng g service openweather-service
    $ ng g service backend-service

## Creation of nav routes

    Changed app-routing.module.ts file

    import { HomeComponent } from './modules/home/home.component';
    import { DocumentationComponent } from './modules/documentation/documentation.component';

    const routes: Routes = [
        { path: '', component: HomeComponent, },
        { path: '/documentation', component: DocumentationComponent, }
    ];

## Changes in the project structure 

    Using as the base, the following project was used for made the header, footer and general layout of the project.

    https://htmldemo.hasthemes.com/educat-preview/educat/index.html

### SCSS structure

    The following files was created and written using the theme as a reference.

    /src/assets/scss/style.scss
    /src/assets/scss/_variable.scss
    /src/assets/scss/responsive.scss
    /src/assets/scss/core/core.scss

### Changing the angular.json

    "architect": {
        "build": {
            "options": {
                "styles": [
                    "src/assets/scss/style.scss",
                ]
            }
        }
    }

### Add icon library

    Was chosen the free fontawesome library
    Install command
    npm install @fortawesome/fontawesome-free

    angular.json modification
    "projects": {
        ...
        "build": {
            "options": {
            "styles": [
                "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
            ]
            }
        }
    }

### Images and menu json

    Some imagens was add to a sub folder in assets as showm below:

    /src/assets/img/logo/*
    /src/assets/img/icon/*

    And a json file was used to made the menu in a such way that is not necessary go to backend to return a menu object. Just to become more simple.

    /src/assets/json/menu.json

    To work with json the tsconfig.json file was changed

    "compilerOptions": {
        "resolveJsonModule": true,
    }

### App Component

    Based in the choosed layout the app.component become:

    <div class="as-mainwrapper">
        <div class="bg-white">
            <app-header></app-header>
            <main>
            <router-outlet></router-outlet>
            </main>
            <app-footer></app-footer>    
        </div>
    </div>

### Change in environment.ts

    openweather_uri: 'https://api.openweathermap.org/data/2.5/',
    openweather_key: '<API GENERATED>',
    pokeapi_uri: 'https://pokeapi.co/api/v2/type/'



