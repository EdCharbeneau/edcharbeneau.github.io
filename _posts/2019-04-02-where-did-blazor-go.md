---
layout: post
permalink: /vs2019-where-did-blazor-go/
title: I Just Installed the VS2019 Release and Where Did Blazor Go
path: 2019-04-02-where-did-blazor-go.md
---

## VS2019 Release Day

So you've just switched from Visual Studio 2019-preview to the stable release and now you're missing Razor Components and Blazor templates. This is a common issue and you're not alone, so let's get you back up and running with a few simple steps. Additionally, the best advice is likely to just [STAY ON PREVIEW](/vs2019-where-did-blazor-go/#stay-on-visual-studio-preview).

## Re-install .NET Core 3.0 Preview

If you've already installed the .NET Core 3.0 preview bits, may need to install them again. I was a little confused at first because I assumed that VS2019 automatically pick up what .NET versions were installed on the system, however this isn't the case.

![](/img/posts/SDK-dropdown.jpg?v2)

If you're missing .NET Core 3.0 from this list, it's time to do a repair install from the link below:

https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-3.0.100-preview3-windows-x64-installer

## Enable Preview Bits

If you're a Blazor Fan like me, you're used to living on the bleeding edge by now. You'll need to continue to live dangerously for the time being. Before you can run your Blazor app in VS2019, you will need to enable preview bits through the options dialog.

Options > Projects and Solutions > [x] Use previews of the .NET Core SDK

![](/img/posts/preview-bits.jpg?v2)

## Stay On Visual Studio Preview

If you don't want to have to worry about these things, you can opt to continue with the Visual Studio 2019 Preview. Both Preview and Stable can run on side-by-side on the same machine. Any improvements to Blazor tooling and .NET Core should be easily accessible from the VS-Preview channel. The choice is yours whether to go with the main stream (tweaks enabled) or previews, both should work.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Using <a href="https://twitter.com/hashtag/Blazor?src=hash&amp;ref_src=twsrc%5Etfw">#Blazor</a>? Stick to the Visual Studio 2019 *Preview* channel.</p>&mdash; Daniel Roth (@danroth27) <a href="https://twitter.com/danroth27/status/1113211173137027073?ref_src=twsrc%5Etfw">April 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Blazor Client Side Templates

If you were already using the Blazor Client-side templates, then you should be good-to-go. However, if you're new to Blazor you man need to install the additional templates found on the Visual Studio Marketplace.

https://marketplace.visualstudio.com/items?itemName=aspnet.blazor

### Need More Blazor?

If you're looking to learn more about Blazor please check out the videos I produce each week at [BlazorVideos.com](http://BlazorVideos.com) (YouTube).

#### Blazor Community Chat

[Chat with other devs about the Blazor project.](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

