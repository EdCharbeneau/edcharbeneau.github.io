---
layout: post
permalink: /blazor-statehaschanged-100618/
title: Blazor StateHasChanged() Oct. 6, 2018
path: 2018-10-06-blazor-statehaschanged-100618.md
---

<iframe src="https://player.twitch.tv/?autoplay=false&video=v319229788" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/videos/319229788?tt_content=text_link&tt_medium=vod_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch Blazor StateHasChanged is your weekly dose of Blazor community news and live code demos. from EdCharbeneau on www.twitch.tv</a>

## Blazor 0.7.0 Speculation

We don't have much info about Blazor 0.7.0 yet, 0.6.0 just shipped last week. What I can speculate from inspecting GitHub issues is that we'll see more effort put into Server-Side Blazor and SignalR support. This seems very likely considering it will ship in ASP.NET 3.0. I feel that offline capabilities will be an issue for some app scenarios, so the team is fixing issues with connecting & reconnecting to SignalR sessions.

[Server-side: handle reconnection, potentially to different server](https://github.com/aspnet/Blazor/issues/1222) Notice the 0.7.0 flag on this issue.

## Even More Blazor Speculation

During the show someone asked about the Experimental label on Blazor, referring to a stream from TechBash where Scott Hunter talked about Blazor in detail.

"Allegedly Scott Hunter said the experimental label is going to be removed from Blazor - [https://twitter.com/dotNetCoreBlog/status/1047842380949479424](https://twitter.com/dotNetCoreBlog/status/1047842380949479424)"

From previous conversations I had with Scott Hunter, this is untrue. I believe some context was lost in the announcement and he was referring to ASP.NET Core 3 Razor Components (Aka Server-Side Blazor using SignalR). I have asked Scott to clarify what he meant so the communities exceptions are settled.

Update: I followed up with Scott Hunter and he was able to clear up the misunderstanding.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Server-Side Razor Components was what I was referring to. The Web Assembly version of it will take more time as need RTM version of <a href="https://twitter.com/hashtag/dotnet?src=hash&amp;ref_src=twsrc%5Etfw">#dotnet</a> that supports Web Assembly.</p>&mdash; Scott Hunter (@coolcsh) <a href="https://twitter.com/coolcsh/status/1048687491828477953?ref_src=twsrc%5Etfw">October 6, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## [Server-Side Blazor to Ship in .NET Core 3.0](https://visualstudiomagazine.com/articles/2018/10/03/blazor-update.aspx)

This article is well written and also supports my opinion of the aforementioned speculation that all of Blazor will lose the experimental tag is incorrect (not happening this year, sorry).

However, the article is a great read. I highly suggest sharing it with the .NET community to help build excitement for the framework. The more we share, the more we can help green light the rest of Blazor. Consider it a community building action item ;)

## [Visual Studio hangs when building a Blazor project](https://github.com/aspnet/Blazor/issues/1326)

Blazor builds are hanging with VS 15.8. This issue should be resolved with 15.9. It's a minor pain point, it's come up on the live show several times. I'm glad to see it will be fixed shortly.

## Other Articles and Bits

### Bionic 

[Bionic](https://bmsantos.github.io/bionic/) is an Ionic Framework CLI clone for Blazor projects.

[Bionic Videos](https://bionicframework.github.io/Documentation/updates/)

The goal is to provide an easy, modular, and repeatable way of creating, building, and deploying Blazor projects.

Features:

- SCSS Style Isolation: Pages and components have their own SCSS file for quick and easy styling.
- Hot Rebuild: Automatically rebuild modified source or SCSS code (hot reloading not available, yet).
- Component Generation: Quickly generate Blazor pages, layouts, components, and services.
- Modular Platform Architecture: Project deployment platforms are provided through plugins and isolated within each project.
- Blast Scripting: Execute a group of commands under a single target name.

### Blazor-Fluxor

[Blazor-Fluxor](https://github.com/mrpmorris/blazor-fluxor) is a zero boilerplate Flux/Redux library for the new Microsoft aspdotnet Blazor project.

The aim of Fluxor is to create a single-state store approach to front-end development in Blazor without the headaches typically associated with other implementations, such as the overwhelming amount of boiler-plate code required just to add a very basic feature.

#### Events and More

Come hear about Blazor live and in person. I'll be at the following shows either presenting on Blazor or giving sessions in the same venue as the ASP.NET team.

[DevReach, Sofia Bulgaria](https://devreach.com/)
[DevUp, St. Louis, USA](https://devupconf.org/)

**Podcast: [Eat Sleep Code](https://soundcloud.com/esc-podcast)**

TechBash: [Telerik Webinar](https://www.telerik.com/blogs/telerik-r3-2018-release-webinar-recap)

#### [Blazor Gitter](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

Chat with other devs about the Blazor project.

