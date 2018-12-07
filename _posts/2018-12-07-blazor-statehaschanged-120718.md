---
layout: post
permalink: /blazor-statehaschanged-113018/
title: Blazor StateHasChanged() Dec. 7, 2018
path: 2018-12-07-blazor-statehaschanged-120718.md
---

## Blazor Paint

Even at version 0.7.0 Blazor is able to do some really amazing things. The Blazor Paint app let's you use the browser to draw in real time. The Blazor Paint app is quite amazing for a demo app. The app features: color select, undo, advanced selection, and delete. [Try Blazor Paint live][bplive] or [see the source code][paint].

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr"><a href="https://twitter.com/stevensanderson?ref_src=twsrc%5Etfw">@stevensanderson</a> is my Hero, <a href="https://twitter.com/hashtag/blazor?src=hash&amp;ref_src=twsrc%5Etfw">#blazor</a> is awesome :)<a href="https://t.co/ltkGrzWw5P">https://t.co/ltkGrzWw5P</a><a href="https://t.co/OquPoTPrNQ">https://t.co/OquPoTPrNQ</a> <a href="https://t.co/lsrUFqG9nk">pic.twitter.com/lsrUFqG9nk</a></p>&mdash; lupusa (@lupusa1) <a href="https://twitter.com/lupusa1/status/1070541513153802240?ref_src=twsrc%5Etfw">December 6, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## A Demonstration of Simple Server-side Blazor Cookie Authentication

On Michael Washington's blog, he describes how to implement authentication in a Blazor application. The example shows how to integrate `Microsoft.AspNetCore.Identity` with Blazor using a full stack .NET application. Through the process you'll learn how to create a login component that uses cookies for authentication. You can read the full article on the [Lightswitch Help Website][auth]

## Blazor Fiddle

In the spirit of [JS Fiddle][jsf] and [DotNet Fiddle][dnf], [Blazor Fiddle][fiddle] is an online sandbox for trying out Blazor. Blazor Fiddle is quite an amazing web app that allows you to work on live Blazor code in the browser without installing any tools on your machine. While this is an extremely early look at what could be possible with Blazor, it shows some real promise.

See it in action at [BlazorFiddle.com][fiddle]

## TabSet Continued with Sass Deep Dive

On this episode I attempted to abstract the CSS styles into a custom namespace and .css file so the TabSet component is more portable. Through the process the CSS for the TabSet ended up breaking. Even though the demo didn't quite work out, I was able to demonstrate how to compile Sass into CSS without the need for NodeJS or Ruby (pure .NET tooling). Also, we took a deep dive into Bootstrap's source code and saw how to customize a build of Boostrap for our own use.

When the issue is fixed, the source code will be found on Github: https://github.com/EdCharbeneau/StateHasChangedBlazor070

#### [Blazor Gitter](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

Chat with other devs about the Blazor project.

[auth]: http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/4316/A-Demonstration-of-Simple-Server-side-Blazor-Cookie-Authentication.aspx
[paint]: https://github.com/Lupusa87/BlazorPaint
[fiddle]: https://blazorfiddle.com/
[dnf]: https://dotnetfiddle.net
[jsf]: https://jsfiddle.net/
[bplive]: https://lupblazordemos.z13.web.core.windows.net/PaintPage