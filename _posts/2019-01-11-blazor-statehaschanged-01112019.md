---
layout: post
permalink: /blazor-from-scratch/
title: Blazor From Scratch
path: 2019-11-04-blazor-statehaschanged-01112019.md
---

## Blazor StateHasChanged() Jan. 11, 2019

This week on Blazor StateHasChanged() we learned how to build a Blazor app from scratch. The File > New Project templates are a great way to get started, however it's helpful to repeat the basic build steps in order to firmly understand what's happening in a project. Throughout the demos we learned about: Application life cycle, minimum requirements, and differences between client-side and server-side projects.

<iframe width="560" height="315" src="https://www.youtube.com/embed/WCJGIfZsUlg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## MVVM Support in Blazor 

In this article Jeremy Likness shares his solution for property change notification across components. The solution implements INotifyProperty changed to communicate when StateHasChanged() needs to be called. You can find a full write up, with source code on [Jeremy's blog](https://blog.jeremylikness.com/mvvm-support-in-blazor-dbc38060a4a0). 

## Blazor Circuits

In the latest episode of ASP.NET Community Standup, there was a LOT of Blazor discussion. One topic revolved around a concept called "Razor Circuits" (tentative name?). The idea was to allow compatibility of the Blazor/Razor Components, component model with ASP.NET Core/Razor Pages. When a Blazor component is used in an ASP.NET Core View/Razor page, it will invoke a SignalR hub to satisfy the needs of that component's logic. Conceptually it may be like a small Razor Components app hosted within an ASP.NET Core View/Razor Page. Time will tell how it actually is integrated into the ecosystem. Watch the segment below for more details.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HPNkajbcHFo?start=1253" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Telerik UI for Blazor

Many have asked about the Telerik brand of UI components and if there will be a Telerik UI for Blazor some day. While I can't answer that today, I believe there may be some news brewing. Stay tuned to the Telerik Webinar for details. The Telerik Webinar will take the place of next week's Blazor StateHasChanged starting at 11PM EST.

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">Sign up for the Telerik R1 Release webinar on Jan 18, 11 am ET! Our developer experts <a href="https://twitter.com/samidip?ref_src=twsrc%5Etfw">@samidip</a>  and <a href="https://twitter.com/EdCharbeneau?ref_src=twsrc%5Etfw">@EdCharbeneau</a> will walk you through the major new features and dive deeper into specific concepts and functionalities. Save your seat: <a href="https://t.co/dGMz0WU8Oi">https://t.co/dGMz0WU8Oi</a> <a href="https://twitter.com/hashtag/dotNET?src=hash&amp;ref_src=twsrc%5Etfw">#dotNET</a> <a href="https://t.co/dxDGXjSeAK">pic.twitter.com/dxDGXjSeAK</a></p>&mdash; Progress Telerik (@Telerik) <a href="https://twitter.com/Telerik/status/1084145486746009606?ref_src=twsrc%5Etfw">January 12, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Blazor Community Chat

[Chat with other devs about the Blazor project.](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 
