---
layout: post
title: Using Angular with ASP.NET Core
permalink: /using-angular-with-asp-net-core/
path: 2017-01-09-using-angular-with-asp-net-core.md
---

When starting a new web application we're faced with many possible scenarios for constructing our application. Even when narrowing down the technologies to Angular and ASP.NET Core several possibilities remain. Options for structuring the app's client and server architecture depend on factors such as application size, mobile needs, and code sharing desires. An ASP.NET Core application using Angular can be designed as all-in-one monolithic project, a server & web-client project, or even a multi-client project. In this article we'll look at each scenario and explore the strengths of each choice.

## All-in-one

In this scenario we have a single project, solution, and server. ASP.NET Core fills the role of server-side web API as well as bootstrapping the Angular client-side application.



### All-in-one strengths

Using an all-in-one approach minimizes the scope of the application. One solution means a single server. Hosting an all-in-one application means the entire application can be deployed under a single server instance. Having less moving pieces often means less chance for something to go wrong. Even the file structure is simplified into Models, ClientApp and Controllers folders that represent the familiar MVC pattern.

Quick start solutions for creating such an application using either the [command line](http://www.telerik.com/blogs/cooking-with-aspnet-core-and-angular-2) or [Visual Studio templates](https://blogs.msdn.microsoft.com/webdev/2017/06/28/introducing-asp-net-core-2-0-preview-2/). In these quick start solutions Angular, TypeScript, ASP.NET Core, and Webpack are all configured to work together out-of-the-box. Developers who are less experienced with these technologies can jump in and begin working much more quickly than if they tried to create such an application from scratch. This ease of use is due to webpack abstractions built into the template. This technology is known as [Microsoft ASP.NET Core JavaScript Service](https://github.com/aspnet/JavaScriptServices), a set of technologies that allows execution of arbitrary NPM packages at runtime from .NET code.

> More about templates
> https://blogs.msdn.microsoft.com/webdev/2017/06/28/introducing-asp-net-core-2-0-preview-2/


### All-in-one considerations

At the time of writing Visual Studio support requires using tooling that is in preview release. While the tooling does work as intended, it should be updated to the latest version before beginning. Because Angular updates frequently often the versions of Angular used in the JavaScript Services templates can lag behind the Angular CLI bits from Google. Take caution when using third party Angular modules as they may depend on versions of Angular that are more current that those included in the template.

## Server Web-Cleint

A server and web-client approach is where the server-side application code is kept completely separate from the client code. The server-side application has a clear responsibility to provide API endpoints while the client-side of the application strictly handles the user interface. In addition to the clean separation of responsibility, the code resides in separate solutions. Each solution is deployed to its own server instance, one server handling the ASP.NET Core Web API, while the other (ASP.NET or Node) serving the Angular web-client application and static files.

> Add more about Angular CLI and .NET Core
> https://dustinewers.com/angular-cli-with-net-core/

### Server Web-Client strengths

By separating ASP.NET Core web API from the Angular web-client each can be developed independently. Each development team (server & client) can use task specific technologies and tooling. The server-side application can be built using Visual Studio & ASP.NET Core templates while the Angular web-client can be built using the Angular CLI and choice of editor.

With a server and web-client solution, the client and server can be deployed to their own server instances allowing computing resources to scale independently.

### Server Web-Client considerations

Using separate projects can add complexity to the solution so this approach may be more fitting to teams that have experienced and dedicated server & client developers.

Other considerations include properly configuring Cross-Origin Resource Sharing (CORS) on development systems and in production depending on how the application is hosted. When hosting on multiple domains, ASP.NET Core will need [CORS middleware](https://docs.microsoft.com/en-us/aspnet/core/security/cors) loaded and configured based on the applications needs. In addition, proxy settings may need to be configured for the client application to work in the development environment.

## Multi-Client & Code Sharing

One of the new features in Angular is that it isn't tied to the web DOM. Angular can now utilize templates for UI types other than HTML. This means Angular can be used to power applications that run JavaScript and use UI markup languages such as XML. NativeScript is one such platform that can user Angular to power iOS and Android applications. This allows NativeScript and an Angular web application to share common code while rendering different templates.

> Brad Green from the Angular team shared details of the Angular template engine and how it can go beyond HTML in the podcast Eat Sleep Code: "Engineering Angular with Brad Green"

> More about Code Sharing
> https://www.nativescript.org/blog/code-sharing-between-web-and-mobile-with-angular-and-nativescript

### Server Multi-Client benefits

Many of the same benefits apply from the Server Web-Client scenario with the addition of code sharing. By utilizing Angular templates much of the client-side application code can be shared between the web-client and native mobile OS versions of the application. Since all of the code is written with web technologies (HTML, XML, CSS, TypeScript / JavaScript) developers familiar with the web have the a great opportunity to build large scale apps for a massive ecosystem.

Furthermore, we're not only sharing code between web and mobile, but we're sharing code between iOS and Android as well. 

> An example of this can be seen on GitHub...

### Server Multi-Client considerations

The ability to write once deploy anywhere has always been the holy grail for developers. However, this usually comes at with the price of added complexity. Keeping the each client type in parity with each other needs to be planned ahead of time to minimize friction. Although code sharing is possible, top most UI layer of the application is not shared. This means while the TypeScript code can power both web and native mobile UI logic, the actual presentation itself needs to be written twice; once for the web in HTML and once for mobile in XML.

## Wrap up

No matter which we choose, Angular and ASP.NET Core seems to be the future of application development. With so many architecture possibilities it's important to not get lost in the "what if?" scenarios. Each of the project types covered here can be scaled up at any point. Start with what works best for the needs of your project, team's expertise, and deadlines.