---
layout: post
permalink: /blazor-statehaschanged-111618/
title: Blazor StateHasChanged() Nov. 16, 2018
path: 2018-10-19-blazor-statehaschanged-110218.md
---

On this episode we learned how to use the new Cascading Parameter feature in Blazor 0.7.0. We also continued NeuralNovember, a month long event of using machine learning with Blazor. Today we toured Azure ML Studio and connected to a custom ML model using Web API. The process of creating a custom model was discussed, including the process of cleaning, training, and validating a custom ML model using Azure ML Studio.

## [Blazor 0.7.0 Released!](https://blogs.msdn.microsoft.com/webdev/2018/11/15/blazor-0-7-0-experimental-release-now-available/)

The hot new feature of this release is the Cascading Parameter. Cascading Parameters allow components in a hierarchy to share values.  

<iframe src="https://player.twitch.tv/?autoplay=false&video=v336649308" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/videos/336649308?tt_content=text_link&tt_medium=vod_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch Blazor StateHasChanged is your weekly dose of Blazor community news and live code demos.This week we discuss the new release, Blazor 0.7.0 from EdCharbeneau on www.twitch.tv</a>

The project for this show can be found on GitHub. https://github.com/EdCharbeneau/StateHasChangedBlazor070

```
dotnet user-secrets set "AzureVision" "<YOUR API KEY FROM AZURE COGNITIVE SERVICES>"
```

To sign up for subscription keys, see [Subscriptions](https://azure.microsoft.com/try/cognitive-services/). 

## [Blazor Q&A with Microsoft's Daniel Roth](https://www.telerik.com/blogs/blazor-qa-with-microsofts-daniel-roth)

Telerik conducted an interview with Daniel Roth, program manager on the Blazor project. Daniel answered questions about how Blazor got started, what the community is like and much more. See the full interview at [Telerik.com/blogs](https://www.telerik.com/blogs/blazor-qa-with-microsofts-daniel-roth)

## Ed Invades the Channel 9 Studios

I was given the opportunity to share the basics of Blazor with the Channel 9 audience. In this two part series I outline the various Blazor templates including: Client Side Blazor with Web Assembly, Full Stack, Server Side Blazor (Razor Components), and component library templates.

<iframe width="560" height="315" src="https://www.youtube.com/embed/PiJtEZYMxOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

## Interop & jQuery

On the live show I proposed the question.

> Do you care if Blazor components utilize jQuery via interop if it is abstracted away from the API exposed in C#?

Continue the discussion in the comments section on this page, or feel free to bring it up during a live show. I would like to know your reasoning, why or why not?

## NDC London

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Somehow we managed to get all three of the Blazor leads lined up to give a 2-day workshop in London this January. A rare opportunity! <a href="https://t.co/VTqOYoDmb6">https://t.co/VTqOYoDmb6</a></p>&mdash; Steve Sanderson (@stevensanderson) <a href="https://twitter.com/stevensanderson/status/1056858390234832897?ref_src=twsrc%5Etfw">October 29, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

**Podcast: [Eat Sleep Code](https://soundcloud.com/esc-podcast)**

#### [Blazor Gitter](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 

Chat with other devs about the Blazor project.

