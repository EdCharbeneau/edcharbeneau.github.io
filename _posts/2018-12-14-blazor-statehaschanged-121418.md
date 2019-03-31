---
layout: post
permalink: /blazor-statehaschanged-121418/
title: Blazor StateHasChanged() Dec. 14, 2018
path: 2018-12-14-blazor-statehaschanged-121418.md
---

## Blazor SVG Helper

Last week we talked about [Blazor Paint][bplive] a paint program written completely in Blazor. Turns out there's some really cool tech under the hood of Blazor Paint that's wrapped up in a nice set of SVG APIs. The [Blazor SVG Helpers][blsvg] let developers define SVG objects in C#. You can create SVG elements and add children (circle, rectangle, image, text and etc) and finally render it through the Blazor RenderTreeBuilder.

## Razor Components for a JavaScript-Free Frontend in 2019

[Razor Components, is what originally started as Blazor Server-Side in early 2018.][rcom] Blazor is a .NET single page web application framework that is generally associated with .NET running on Web Assembly. However, Blazor is capable of running under multiple scenarios including server-side as a .NET Standard application, a.k.a. Razor Components.

## Steve Sanderson - Blazor, a New .NET Single Page Application Framework | Øredev 2018

More Blazor insights and demos from Steve Sanderson. Steve has a great demo in here using ML.NET with Blazor to do sentiment analysis.

<iframe width="560" height="315" src="https://www.youtube.com/embed/qrf3OrLHeFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Blazor Fiddle

In the spirit of JS Fiddle and [DotNet Fiddle][dnf], [Blazor Fiddle][fiddle] is an online sandbox for trying out Blazor. Blazor Fiddle is quite an amazing web app that allows you to work on live Blazor code in the browser without installing any tools on your machine. While this is an extremely early look at what could be possible with Blazor, it shows some real promise.

**Update: BlazorFiddle got a huge speed boost from last week.**

See it in action at [BlazorFiddle.com][fiddle]

## TabSet Continued with Sass Deep Dive

This week the show was kept short. We continued working with Sass using the BuildWebCompiler package and used Libman to bring on client side dependencies. This shows that .NET is capable of using front-end libraries without npm, gulp, and other JavaScript ecosystems.

The source code can be found on Github: https://github.com/EdCharbeneau/StateHasChangedBlazor070

#### [Blazor Gitter](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

Chat with other devs about the Blazor project.


[rcom]: https://www.telerik.com/blogs/razor-components-for-a-javascript-free-frontend-in-2019
[paint]: https://github.com/Lupusa87/BlazorPaint
[fiddle]: https://blazorfiddle.com/
[dnf]: https://dotnetfiddle.net
[blsvg]: https://github.com/Lupusa87/BlazorSvgHelper
[bplive]: https://lupblazordemos.z13.web.core.windows.net/PaintPage