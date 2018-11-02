---
layout: post
permalink: /blazor-statehaschanged-110218/
title: Blazor StateHasChanged() Nov. 2, 2018
path: 2018-10-19-blazor-statehaschanged-110218.md
---

On this episode we kicked off NeuralNovember, a month long event of using machine learning with Blazor. Today we learned how to capture files from an `<input>` and use the data to populate `data:uri`, send data using `PostAsync` and call Azure Cognitive Services.

<iframe src="https://player.twitch.tv/?autoplay=false&video=v330784819" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/videos/330784819?tt_content=text_link&tt_medium=vod_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch Blazor File Inputs from EdCharbeneau on www.twitch.tv</a>

<iframe src="https://player.twitch.tv/?autoplay=false&video=v330784821" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/videos/330784821?tt_content=text_link&tt_medium=vod_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch We go round trip with Blazor + Azure Vision from EdCharbeneau on www.twitch.tv</a>

The project for this show can be found on GitHub. https://github.com/EdCharbeneau/BlazorStateCognitive

To use the project run the following command from **BlazorStateCognitive.Server path**.

```
dotnet user-secrets set "AzureVision" "<YOUR API KEY FROM AZURE COGNITIVE SERVICES>"
```

To sign up for subscription keys, see [Subscriptions](https://azure.microsoft.com/try/cognitive-services/). 

## Visual Studio Code Razor Support

> [The C# extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp) released today (1.17.0) with preview support for Razor editing. Includes support for directive and C# completions. No support for tag helpers yet - that's next. Blazor support comes afterwards.
> -- Daniel Roth

## Web USB Interop

Connect USB devices to your Blazor app [with BlazorExtensions.WebUSB](https://github.com/BlazorExtensions/WebUSB).
A package wraps HTML5 WebUSB APIs by [Gutemberg Ribeiro](https://twitter.com/galvesribeiro) 

## DevReach less than 2 weeks away

Come hear about Blazor live and in person from Jon Galloway.
[DevReach, Sofia Bulgaria](https://devreach.com/sessions/blazor-a-new-framework-for-browser-based-net-apps/)

## NDC London

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Somehow we managed to get all three of the Blazor leads lined up to give a 2-day workshop in London this January. A rare opportunity! <a href="https://t.co/VTqOYoDmb6">https://t.co/VTqOYoDmb6</a></p>&mdash; Steve Sanderson (@stevensanderson) <a href="https://twitter.com/stevensanderson/status/1056858390234832897?ref_src=twsrc%5Etfw">October 29, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

**Podcast: [Eat Sleep Code](https://soundcloud.com/esc-podcast)**

#### [Blazor Gitter](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

Chat with other devs about the Blazor project.

