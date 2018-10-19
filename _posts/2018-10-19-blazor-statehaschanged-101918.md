---
layout: post
permalink: /blazor-statehaschanged-101918/
title: Blazor StateHasChanged() Oct. 19, 2018
path: 2018-10-19-blazor-statehaschanged-101918.md
---

On this episode we looked into what caused EF In-Memory to not work last week. We reworked the create customer page with Bootstrap 4 and strongly typed objects. The sample application can be found on GitHub at: []()

Also on the show, the Blazor "Dual Mode" project was explored. Blazor Dual Mode enables quick toggling between Blazor (WebAssembly) and Razor Components (Blazor server-side via SignalR). By having the ability to [toggle between these modes we can enable debugging in Visual Studio at the click of a button](https://github.com/EdCharbeneau/BlazorDualMode). 

<iframe src="https://player.twitch.tv/?autoplay=false&video=v324725436" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/videos/324725436?tt_content=text_link&tt_medium=vod_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch Blazor StateHasChanged is your weekly dose of Blazor community news and live code demos. from EdCharbeneau on www.twitch.tv</a>

## [Bletris](https://github.com/SQL-MisterMagoo/BlazorTest)

A no-JavaScript clone of Tetris using Blazor. 

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">Just added a nice Retro Game Over<a href="https://twitter.com/hashtag/Blazor?src=hash&amp;ref_src=twsrc%5Etfw">#Blazor</a> <a href="https://twitter.com/hashtag/Experiment?src=hash&amp;ref_src=twsrc%5Etfw">#Experiment</a> <a href="https://twitter.com/hashtag/Bletris?src=hash&amp;ref_src=twsrc%5Etfw">#Bletris</a><a href="https://t.co/lRJZikYxBB">https://t.co/lRJZikYxBB</a><a href="https://t.co/ETTo3CW88N">https://t.co/ETTo3CW88N</a> <a href="https://t.co/pjPip6xKM9">pic.twitter.com/pjPip6xKM9</a></p>&mdash; ℳisterℳaghoul 💀👻 (@mistermag00) <a href="https://twitter.com/mistermag00/status/1053077009134424064?ref_src=twsrc%5Etfw">October 19, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## [Feedback for Visual Studio Code](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications)

Daniel Roth is requesting feedback on Blazor support for Visual Studio Code. Make sure you drop by the chat and share your opinion.

## [A Breakdown of Blazor Project Types](https://www.telerik.com/blogs/a-breakdown-of-blazor-project-types)

On the show I broke down some Q/A from my article "A breakdown of Blazor project types". 

1 - How do I structure project so I can easily move to full-stack approach with WebAssembly later?.

> I would use an n-tier application approach that takes the best of the Full-Stack and Razor Components project types. Using dependency injection you could swap out a service for the given project type that either talks to the database directly (Server Side) or via REST (Web Assembly). If structured properly you could even have other .NET clients such as Xamarin.

![](https://i.imgur.com/RtlrpCE.jpg)

2 - I would use server-side approach for intranet solution (data entry, listing some reports) which is used by 600 clients daily. Would you say this is too much for server-side approach or should it handle without problem?

> Depending on your infrastructure this should work fine. If your internal servers aren't that robust, you can always offload work using [Azure SignalR as a Service](https://azure.microsoft.com/en-us/services/signalr-service/). 

## [Blazor Dual Mode](https://github.com/Suchiman/BlazorDualMode)

Demo on how to dynamically switch from client to server side mode by appending ?mode=server to the url.

## [EF Core In-Memory Database Provider](https://docs.microsoft.com/en-us/ef/core/providers/in-memory/)

**Continued from last week: ** On this show we used the In-Memory Database Provider to create a data sandbox. The first half of the show I struggled with the database not persisting as I had recalled it working in the past. Thankfully the chat room pushed through the issue and we found a resolution together. After the show ended, I looked at some previous samples and found how I had made it work before using only Startup.cs. You can see a reworked version of this example of Startup.cs below. This method doesn't require hacking at Program.cs.

https://gist.github.com/EdCharbeneau/4783fc48a79c2f920da74dc412993a81#file-startup-cs-L40-L55

#### Events and More

Come hear about Blazor live and in person.
[DevReach, Sofia Bulgaria](https://devreach.com/)

Thanks to everyone who learned about the show at [Louisville .NET](https://www.meetup.com/Louisville-DotNet/)

**Podcast: [Eat Sleep Code](https://soundcloud.com/esc-podcast)**

#### [Blazor Gitter](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

Chat with other devs about the Blazor project.

