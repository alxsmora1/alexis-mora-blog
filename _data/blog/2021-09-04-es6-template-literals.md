---
template: BlogPost
path: /es6-template-literals
date: 2021-09-04T18:26:02.718Z
title: ES6 Template Literals
metaDescription: ES6 template literals javascript
thumbnail: /assets/anas-alshanti-feXpdV001o4-unsplash.jpg
---
Con la llegada de ES6 y la evolución de javascript a través de los últimos años se han agregado muchas funcionalidades propias del lenguaje que ya son soportadas en casi todos los navegadores. Una de esas funcionalidades son los templates literals que pueden ofrecernos una mejor manera de tratar con cadenas de texto desde javascript. 

Además de que nos ofrecen la función de interactuar con el DOM en la creación dinámica de código HTML e incluso acceder a funciones dentro de ellos, una de las grandes ventajas cuando los usamos es que no tenemos que escapar comillas simples o dobles.

La forma básica de uso es declarar una variable que los contenga:

```javascript
let text = `Hello World!`;
```

Podemos usar variables dentro de los template literals:

```javascript
let year = 2021;
let text = `The year of publication of this article is ${year}`;
```

Podemos generar estructuras de código HTML:

```javascript
let renderHTML = `
  <div id="container">
    <h1 class="text-header">Hello World!</h1>
  </div>
`;
```

Podemos también usar funciones dentro de los template literals:

```javascript
const rndNumber = () => {
  return Math.floor(Math.random() * 10);
}

let text = `The random number is: ${rndNumber()}`;
```

Una gran ventaja sobre las cadenas comunes es que podemos utilizar cualquier símbolo y no tenemos necesidad de escapar símbolos para que no tengan conflicto con nuestro código:

```javascript
//ES5 with errors
var textES5 = '<h1 class="text-header">50% discount for new 'Superusers'</h1>';

//ES6 template literals
let textES6 = `<h1 class="text-header">50% discount for new 'Superusers'</h1>`;
```
