---
layout: post
permalink: /blazor-authentication-authorization/
title: Blazor Authentication and Authorization
path: 2019-02-15-blazor-authentication-authorization.md
---

This week on Blazor StateHasChanged we learned about Authentication and Authorization with Blazor. We looked at how to implement Twitter Auth with Blazor using the BlazingPizza workshop as a demo. We also discussed the difference between (Authentication and Authorization) vs. Identity.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cY-ffDR0yTU?start=1506" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Auth Deep Dive

If you're looking for a deep dive explanation of how Authentication and Authorization work in ASP.NET, then I suggest looking at the article I wrote for Red Gate. The article is a little dated as it refers to MVC5 and OWIN, but fundamentally it should be accurate to what we're doing today. The article walks through the process of creating a custom Auth pipeline for MVC. Throughout the process you'll learn everything you need to know about how Auth middleware works in .NET.

https://www.red-gate.com/simple-talk/dotnet/net-framework/creating-custom-oauth-middleware-for-mvc-5/

## Blazing Pizza 0.8.0

*As of Feb 24th, 2019.*
The Blazing Pizza workshop is currently for Blazor 0.7.0. In today's show, we're using Blazor 0.8.0. Fortunately there is a pull request from a community member @Kant2002 that brings the workshop up to date. Using this branch we can stay with the latest version of Blazor. You can find the 0.8.0 bits here: Latest: https://github.com/kant2002/blazor-workshop/tree/netcore30

For the 0.7.0 version see the master branch at: https://github.com/dotnet-presentations/blazor-workshop/

## WebAssembly: Emscripten vs Rust vs Blazor

Here's a great read on Medium about different WebAssembly frameworks. It gives a nice summary of why Blazor is important to front-end dev with WebAssembly.

https://medium.com/@ConnectCode/webassembly-for-front-end-web-development-emscripten-vs-rust-vs-blazor-c02fb70b3e19

## Quazor Q Sharp + Blazor?

Test your quantum programming skills in the Microsoft Q# Coding Contest – Winter 2019

Could a quantum computing mashup with Blazor be this years winner?

https://cloudblogs.microsoft.com/quantum/2019/02/07/test-your-quantum-programming-skills-in-the-microsoft-q-coding-contest-winter-2019/

## DotNet Rocks

While at NDC in London, Carl and Richard chatted with Steve Sanderson and Daniel Roth about the latest efforts around running C# in the browser with Web Assembly. Since its first demo back in 2017 by Steve, Blazor has grown up a lot - part of ASP.NET Core but still nominally an experimental project, parts of Blazor are now appearing in the preview editions of .NET Core 3 as Razor Components. 2019 looks to be a big year for Blazor!

https://www.dotnetrocks.com/?show=1622

#### Blazor Community Chat

[Chat with other devs about the Blazor project.](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

