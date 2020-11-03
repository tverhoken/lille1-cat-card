# Lille 1 cat card

This project aims to be a base of work for Javascript front-end courses.

## Getting started

### Prerequisites

You will need the following things properly installed on your computer :

* [Git](https://git-scm.com/)
* A web browser

### How it works

The project contains :

* 2 HTML pages
* 1 CSS file
* A DOM helper module script
* A data service module script (and its Typescript version)

The 2 HTML pages are static models of application display : A home page with a list of resources and a form to handle Create/Update/Delete operations.

The CSS file provide custom style of the application. Otherwise, [Boostrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) is used.

The DOM helper module is for demo purpose.

The data service module provide application data management. It should be integrated into the application's sources in order to ease data management.

When it comes to implement application with the frontend technical stack of your choice, these files are here to ease HTML/CSS integration and data management so that you can focus on implementing features that transform that static pages into a dynamic web application.

### Dynamic web application

You can see what is expected by going to the `working-app` branch and serve the directory through a web server :

```
$> git checkout working-app
$> npx local-web-server
```

This expose a [VanillaJS framework](http://vanilla-js.com) implementation of the application to `http://localhost:8000`.

All the steps from static files to web application are described through tags : `step-1...step-10`.

## Contacts

Thomas VERHOKEN [![https://twitter.com/tverhoken][1.1]][1]

[1]: https://twitter.com/tverhoken
[1.1]: http://i.imgur.com/wWzX9uB.png