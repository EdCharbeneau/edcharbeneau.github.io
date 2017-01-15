---
layout: post
title: Using Angular with ASP.NET Core
permalink: /using-angular-with-asp-net-core/
path: 2017-01-09-using-angular-with-asp-net-core.md
---

When starting a new web application we're faced with many possible scenarios for constructing our application. Even when narrowing down the technologies to Angular and ASP.NET Core several possibilities remain. Several options for structuring the apps client and server architecture present themselves. The app can designed as all-in-one monolithic project, a server & web-client project, or even a server & multi-client project. In this article we'll look at each scenario and explore their strengths.

## All-in-one

If the application plan doesn't include the need for any other client than a web presentation, then the all-in-one approach should suffice. In this scenario we have a single project, solution and server. ASP.NET Core fills the role of server-side web API as well as bootstrapping the Angular client-side application.

### All-in-one strengths

Using an all-in-one approach minimizes the scope of the application. The file structure is straight forward having Models, ClientApp and Controllers folders that represent the familiar Model, View, Controller pattern. In addition, there are quick start solutions for creating such an application using either the [command line](http://www.telerik.com/blogs/cooking-with-aspnet-core-and-angular-2) or [Visual Studio templates](http://developer.telerik.com/products/kendo-ui/single-project-full-stack-angular/). In these quick start solutions Angular, TypeScript, ASP.NET Core, and Webpack are all configured to work together out-of-the-box. Developers who are less experienced with these technologies can jump in and begin working much more quickly than if they tried to create such an application from scratch.

One solution also means a single server. Hosting an all-in-one application means the entire application can be deployed under a single server instance. Having less moving pieces often means less chance for something to go wrong.

### Server Web-Client considerations

...

## Server Web-Cleint

A server and web-client approach is where the server-side application code is kept completely separate from the client code. The server-side application has a clear responsibility to provide API endpoints for the client while the client-side of the application strictly handles the user interface. In addition to the clean separation of responsibility, the code resides in separate solutions. Each solution is deployed to its own server instance, one server handling the ASP.NET Core Web API, while the other (ASP.NET or Node) serving the Angular web-client application and static files.

### Server Web-Client strengths

By separating ASP.NET Core web API from the Angular web-client each can be developed independently. Each development team server & client can use task specific technologies and tooling. The server-side application can be built using Visual Studio & ASP.NET Core templates while the Angular web-client can be built using the Angular CLI and choice of editor.

Server and web-client can computing resources also be scaled independently.

### Server Web-Client considerations

Team experience

## Server Multi-Client

N Solutions
Two Servers
Mutitple Clients, iOS, Android, IOT.
Shared Angular Code

## Wrap up

No matter which we choose, Angular and ASP.NET Core is ready today.

Developers can get lost in the what if scenarios.

- command line, cooking with angular
- visual studio, full stack angular