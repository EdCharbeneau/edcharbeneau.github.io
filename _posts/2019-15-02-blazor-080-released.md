---
layout: post
permalink: /blazor-preview-2-recao/
title: Blazor 0.8.0 and ASP.NET Core 3.0 preview 2 recap
path: 2019-15-02-blazor-080-released.md
---

## Blazor StateHasChanged() Jan. 24, 2019

On this episode of Blazor StateHasChanged we recaped the NDC London workshop, Blazing Pizza. We discussed the Blazor 0.8.0 release details along with the ASP.NET Core 3.0 preview 2 bits. Telerik is also keeping up to date with the releases with Telerik UI for Blazor 0.2.0. The 2.0 release targets compatibility with VS2019 and Blazor 0.8.0.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iNbVwZM4wos" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Telerik Grid-Edit-Form

This week we saw a demo of the Telerik UI for Blazor grid. The demo utilizes column templates to easily create an edit form experience. The combination of the Telerik grid and Razor Components model made this quite an easy task. The example shown on the show can be found on GitHub with many other Telerik UI for Blazor demos: https://github.com/telerik/ui-for-blazor-examples/


### Rendering Razor Components from ASP.NET Core MVC.

One amazing feature that is in the works for Razor Components is the ability to pre-render components in Razor Pages or MVC views. Using the `RenderComponentAsync` method Razor Components can work on existing ASP.NET Core applications. We tried this live on the show and it worked just as described in the [release post for ASP.NET Core 3.0 preview 2](https://blogs.msdn.microsoft.com/webdev/2019/01/29/aspnet-core-3-preview-2/).

```
@(await Html.RenderComponentAsync<Counter>(new { IncrementAmount = 10 }))
```

## Interop Poll

The interop poll completed with nearly 100 participants. This is excellent feedback, thank you all for voting.

The interop poll was created to try and gauge an understanding of developer's perception of JavaScript interop with Blazor. 

51% see JavaScript interops as a value add. So just about half of those polled understand there is a need for JavaScript with Blazor apps. This is good considering JavaScript is needed to bridge Blazor with browser features that it cannot gain access too any other way. Having a library of JavaScript interops with C# APIs (abstractions) on top will allow developers to do more within the environment they're comfortable.

38% had the opinion of "JavaScript, not in my app". This is likely based on one of two things. First, these developers are worried that OSS projects, community projects, and commercial software vendors will simply re-package their JavaScript offerings with a C# interface on top. While this is a quick-to-market approach it circumvents the benefits of the Blazor framework such as DOM efficiency and component model. The second possibility is just pure gut reaction. Developers simply want a pure .NET experience full stack. This opinion however just isn't realistic as WebAssembly and Blazor aren't positioned to provide a full scale alternative to JavaScript.

11% The remaining few didn't know what a JavaScript interop is. This is likely due to the newness of Blazor. I'm assuming that some of the "JavaScript, not in my app" respondents may belong in this category as well. My recommendation for developer's who chose this answer is to read my article "[Working with Blazor JavaScript Interops](https://blog.logrocket.com/working-with-the-blazor-javascript-interop-3c2a8d0eb56c)".

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">If you&#39;re using or interested in using <a href="https://twitter.com/hashtag/Blazor?src=hash&amp;ref_src=twsrc%5Etfw">#Blazor</a>. If you see a library of Blazor JavaScript Interops, do you think:</p>&mdash; Ed Charbeneau #Blazor #StateHasChanged (@EdCharbeneau) <a href="https://twitter.com/EdCharbeneau/status/1088900387258679296?ref_src=twsrc%5Etfw">January 25, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Blazor Community Chat

[Chat with other devs about the Blazor project.](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 
