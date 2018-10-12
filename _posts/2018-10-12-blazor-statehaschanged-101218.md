---
layout: post
permalink: /blazor-statehaschanged-101218/
title: Blazor StateHasChanged() Oct. 12, 2018
path: 2018-12-06-blazor-statehaschanged-101218.md
---

A review of the ASP.NET Community Standup, what happened at DevUp, highlights of Blazor Dual Mode and more. This week we dive into Entity Framework Core's In-Memory Database Provider. We do some basic CRUD operations using Blazor and EF.

<iframe src="https://player.twitch.tv/?autoplay=false&video=v321698059" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/videos/321698059?tt_content=text_link&tt_medium=vod_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch Blazor StateHasChanged is your weekly dose of Blazor community news and live code demos. from EdCharbeneau on www.twitch.tv</a>

## [ASP.NET Community Standup: The Blazor Show!](https://www.youtube.com/watch?v=wwi55L6Qb18&list=PL1rZQsJPBU2StolNg0aqvQswETPcYnNKL&index=0)

On this weeks ASP.NET Community Standup, the topic is Blazor! Steve Sanderson demo's the new Provider component and a method of sharing data between components that is so easy it makes Daniel Roth's head explode.

<iframe width="620" src="https://www.youtube.com/embed/wwi55L6Qb18?list=PL1rZQsJPBU2StolNg0aqvQswETPcYnNKL" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## [Blazor Dual Mode](https://github.com/Suchiman/BlazorDualMode)

Demo on how to dynamically switch from client to server side mode by appending ?mode=server to the url.

## [Mono Updates for 0.7.0](https://github.com/aspnet/Blazor/issues/1546)

Speculation that Blazor 0.7.0 will have improved client-side debugging. 

## [EF Core In-Memory Database Provider](https://docs.microsoft.com/en-us/ef/core/providers/in-memory/)

On this show we used the In-Memory Database Provider to create a data sandbox. The first half of the show I struggled with the database not persisting as I had recalled it working in the past. Thankfully the chat room pushed through the issue and we found a resolution together. After the show ended, I looked at some previous samples and found how I had made it work before using only Startup.cs. You can see a reworked version of this example of Startup.cs below. This method doesn't require hacking at Program.cs.

https://gist.github.com/EdCharbeneau/4783fc48a79c2f920da74dc412993a81#file-startup-cs-L40-L55

#### Events and More

Come hear about Blazor live and in person.
[DevReach, Sofia Bulgaria](https://devreach.com/)

Thanks to everyone who learned about the show at [DevUp, St. Louis, USA](https://devupconf.org/)

**Podcast: [Eat Sleep Code](https://soundcloud.com/esc-podcast)**

#### [Blazor Gitter](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

Chat with other devs about the Blazor project.

