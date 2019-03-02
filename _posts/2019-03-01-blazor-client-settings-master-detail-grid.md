---
layout: post
permalink: /blazor-client-settings-master-detail-grid/
title: Blazor Client Settings and Master Detail Grid
path: 2019-03-01-blazor-client-settings-master-detail-grid.md
---

This week on Blazor StateHasChanged we have quite a few great articles to discuss. We take a look at an interesting example to integrate app settings on the client. We also see how we can "hack" in a Master-Detail view on the Telerik UI for Blazor Grid.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yK3-NH9MpFc?start=200" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## App Settings in Blazor

This week I demoed an article by Rémi Bourgarel that shows how to implement Configuration Manager and appsettings.json inside a client-side Blazor application. This was a really cool experiment because it followed the standard way of using Configuration Manager in the context of Blazor. It's worth reiterating (as the article states) be careful as to what you store in these settings because they are far from private. As long as you're aware of the security risk, it's definitely something worth giving some time and seeing if it might be useful in your applications.

https://remibou.github.io/Configuring-a-Blazor-app/

## Uploading Larger Files 

When uploading large files with Razor Components you may hit a dreaded exception "System.InvalidOperationException: Advancing examined to the end would cause pipe to deadlock because FlushAsync is waiting." In this article, Leigh “MisterMagoo” Waldie outlines how to fix this issue in detail.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/RazorComponents?src=hash&amp;ref_src=twsrc%5Etfw">#RazorComponents</a><br>File uploads saved on the server and rendered on page.<br>I will do a quick blog post shortly. <a href="https://t.co/l4f3cmRz2D">pic.twitter.com/l4f3cmRz2D</a></p>&mdash; ℳisterℳagoo #Blazing a trail (@mistermag00) <a href="https://twitter.com/mistermag00/status/1100506463812964352?ref_src=twsrc%5Etfw">February 26, 2019</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

https://blog.razorcomponents.net/2019/02/uploading-larger-files-in-razor.html

## Cascading Values 

Chris Sainty outlines in detail how Cascading values and parameters are used to pass a value from a component to all of its descendants without having to use traditional component parameters.

https://chrissainty.com/understanding-cascading-values-and-cascading-parameters/

## Animation and Visual Effects in Blazor and Razor Components

SQL-MisterMagoo recently posted a GitHub Blazor and Razor Components example that demonstrates a compelling animation. In this post Michael Washington examines how he did it.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/RazorComponents?src=hash&amp;ref_src=twsrc%5Etfw">#RazorComponents</a> <a href="https://twitter.com/hashtag/NoReason?src=hash&amp;ref_src=twsrc%5Etfw">#NoReason</a> <a href="https://twitter.com/hashtag/AllCSharp?src=hash&amp;ref_src=twsrc%5Etfw">#AllCSharp</a><a href="https://twitter.com/hashtag/Not?src=hash&amp;ref_src=twsrc%5Etfw">#Not</a> <a href="https://twitter.com/hashtag/Blazor?src=hash&amp;ref_src=twsrc%5Etfw">#Blazor</a><br>I mean, there is no reason other than because it is there. Pixel components animated using C#/HTML/CSS following the mouse pointer. <a href="https://twitter.com/hashtag/DontAtMe?src=hash&amp;ref_src=twsrc%5Etfw">#DontAtMe</a> <a href="https://t.co/i3oWuWeqr6">pic.twitter.com/i3oWuWeqr6</a></p>&mdash; ℳisterℳagoo #Blazing a trail (@mistermag00) <a href="https://twitter.com/mistermag00/status/1094055219934216198?ref_src=twsrc%5Etfw">February 9, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/4325/Animation-and-Visual-Effects-in-Blazor-and-Razor-Components.aspx

## Event Aggregator for ASP.NET Core 3 Razor Components/Blazor

Mikael Koskinen takes a look at this new, lightweight event aggregator and how to implement it in our ASP.NET Core projects using Razor Components.

Blazor.EventAggregator is a lightweight Event Aggregator for Razor Components. Razor Components (and formerly known as Blazor) is an upcoming technology included in ASP.NET Core 3.0 (currently in Preview 2).

https://dzone.com/articles/event-aggregator-for-aspnet-core-3-razor-component

## Virtual Grid 

Lupusa continues to create all sorts of cool experiments, this time he's created a data grid with a ton of features.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/Blazor?src=hash&amp;ref_src=twsrc%5Etfw">#Blazor</a> Virtual Grid POC 🥳🥳🥳<br>Column/row virtualization!<br>Column styling, resize, freeze, reorder, hide, sort, keyboard navigation.<br>Scrollbar and splitter custom components.<a href="https://t.co/2iDpTRO0GM">https://t.co/2iDpTRO0GM</a><a href="https://t.co/j6tSpHYPJD">https://t.co/j6tSpHYPJD</a><a href="https://twitter.com/stevensanderson?ref_src=twsrc%5Etfw">@stevensanderson</a> <a href="https://twitter.com/danroth27?ref_src=twsrc%5Etfw">@danroth27</a> <a href="https://twitter.com/aVerySpicyBoi?ref_src=twsrc%5Etfw">@aVerySpicyBoi</a> <a href="https://twitter.com/jongalloway?ref_src=twsrc%5Etfw">@jongalloway</a> <a href="https://t.co/SvStvcXtiX">pic.twitter.com/SvStvcXtiX</a></p>&mdash; 🇬🇪 Lupusa #Blazor Vakhtangi Abashidze 🇬🇪 (@lupusa1) <a href="https://twitter.com/lupusa1/status/1101255751794913280?ref_src=twsrc%5Etfw">February 28, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

https://lupblazorvirtualgrid.z13.web.core.windows.net/

#### Blazor Community Chat

[Chat with other devs about the Blazor project.](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

