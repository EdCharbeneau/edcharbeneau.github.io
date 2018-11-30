---
layout: post
permalink: /blazor-statehaschanged-113018/
title: Blazor StateHasChanged() Nov. 30, 2018
path: 2018-11-30-blazor-statehaschanged-113018.md
---

## The Merge

This week the Blazor github repository merged into [master on the AspNetCore repository](https://github.com/aspnet/AspNetCore/tree/master/src/Components). What does this mean?

- Obviously the source code has moved
- Any issues and other GitHub history will migrate to the AspNetCore repo
- New issues should be raised on the AspNetCore repo
- While this does not have any bearing on the experimental status of Blazor, it does feel like a larger investment. One could assume that this merge is a bigger commitment.
- This is likely preparation for ASP.NET Core 3.0. Blazor's server-side model will be released as "Razor Components" sometime in the future. How soon has yet to be established.

## The Many Ways to Bind Data in Blazor

On the show a detailed example of data binding with Blazor was shown. This project by SQL-MisterMagoo walks through every binding scenario. It includes interactive pages that highlight when data is bound for a visual connection with how parent-child relationships work with binding in Blazor. The project also gives example of how to deal with a known issue where StateHasChanged isn't called on the parent when bind-{property} is used.

Clone and contribute at: https://github.com/SQL-MisterMagoo/BlazorBinding

## TabSet Deep Dive

[An Step-Wise or Wizard form UI is an example](https://developer.telerik.com/featured/step-wise-forms-with-asp-net-mvc-and-kendo-ui/) from the ASP.NET and Kendo UI frameworks I wrote a few years back. It has been quite a popular example receiving numerous page views and comments. The concept uses a progress bar, tab set, and buttons to create a step-by-step form. The same type of form would be useful in Blazor, but the current examples of a tab set are basic and lack the necessary APIs to interact with at run-time. On the show web started building additional features into the tab set necessary for run-time events and data binding. 

The source code can be found on Github: https://github.com/EdCharbeneau/StateHasChangedBlazor070

## ML.NET Docs Update

Issues with the ML.NET documentation seen in the previous episode of StateHasChanged have been updated. All of the bugs discovered on the show have since been fixed!

## NDC London

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Somehow we managed to get all three of the Blazor leads lined up to give a 2-day workshop in London this January. A rare opportunity! <a href="https://t.co/VTqOYoDmb6">https://t.co/VTqOYoDmb6</a></p>&mdash; Steve Sanderson (@stevensanderson) <a href="https://twitter.com/stevensanderson/status/1056858390234832897?ref_src=twsrc%5Etfw">October 29, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

**Podcast: [Eat Sleep Code](https://soundcloud.com/esc-podcast)**

#### [Blazor Gitter](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

Chat with other devs about the Blazor project.

