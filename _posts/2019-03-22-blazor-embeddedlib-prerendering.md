---
layout: post
permalink: /blazor-embeddedlib-prerendering/
title: Blazor EmbeddedLibs and Pre-Rendering with MVC
path: 2019-03-22-blazor-embeddedlib-prerendering.md
---

This week on Blazor StateHasChanged we reviewed community projects. The first project EmbedLibraries that enables applications to embed static resources at runtime without manually touching index.html. The next project was a community showcase for using Razor Components in MVC with full interactivity. Finally we looked at the latest examples from Telerik UI for Blazor 0.3.0. 

## Blazor Embed Library

BlazorEmbedLibrary is a component library that provides Blazor-style static file embedding for Razor Components/Blazor. 

SQL-MisterMagoo has created a library that enables dynamic inclusion of static files into Blazor applications. The files are detected by the `<EmbeddedContent Assemblies="@Assemblies" />` component through scanning the referenced assembly names provided to the component. This unique library also comes with mutliple configuration options to permit and block specific static file references at runtime. The source code and basic documentation can be found at the link below.

https://github.com/SQL-MisterMagoo/BlazorEmbedLibrary

## Pre-Rendering Blazor with-in ASP.NET MVC

Over at Loren Dorez's GitHub page, you'll find the EatSleepBlazorRepeat project. This project has a high quality example of how to pre-render interactive components from with an ASP.NET Core MVC application. This is the first time this functionalty has been demoed and shows the future of Blazor compatibility. When this feature makes it into an official Blazor release it could pave the way for migrations from ASP.NET Core to Blazor.

https://github.com/LorenDorez/EatSleepBlazorRepeat

## Telerik UI for Blazor 0.3.0

TIn this release we've added several new components, written from scratch, for Blazor. Our plan is to continue creating more components with native Blazor framework technologies and no legacy JavaScript dependencies. Of course, existing components are getting plenty of features added as well, including: grid updates, popup component, and numeric input.

https://www.telerik.com/blogs/telerik-ui-for-blazor-0-3-0-is-released

#### Blazor Community Chat

[Chat with other devs about the Blazor project.](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

