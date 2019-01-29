---
layout: post
permalink: /blazor-ndc-london/
title: Blazor Notes from NDC London
path: 2019-29-01-blazor-ndc-london.md
---

## Blazor Notes from NDC London

This week I attended a fantastic workshop on Blazor. What made the workshop special is that it came directly from the folks working on Blazor itself: Daniel Roth (PM), Steve Sanderson (Engineer), and Ryan Nowak (Engineer). The team gave a detailed workshop called the Blazing Pizza app, they took a considerable amount of feedback, and share some insights on what's coming.

## Blazing Pizza Workshop App

First I'd like to share my thoughts on the workshop materials. Despite being the first time the team gave the workshop I felt the materials were awesome. We encountered very few hitches along the way, and the few we did hit were trivial at best and immediately fixed.

The workshop followed a pattern I also use when giving workshops which is broken into segments of instruction (aka theory) followed by labs. Each discussion lead into a section of code which reinforced the topic at hand. Over the course of the labs we built a demo application with meaningful lessons.

The app itself was simple enough that it could be accomplished in the given setting, a two day workshop. While simple, the app wasn't boring which can be a problem for getting started materials (I'm looking at you to-do lists). We built the "[Blazing Pizza](https://aka.ms/blazorworkshop)" app, a realistic full-stack application that simulated what you might find when ordering pizza from your real world local pizza shop of "tile-based game" taxonomy.

![](https://user-images.githubusercontent.com/1874516/51797487-9feb8b80-21fc-11e9-8c91-52dfc86d057f.png)

The [Blazing Pizza workshop](https://aka.ms/blazorworkshop) teaches: components, layouts, routing, state management, dependency injection, authentication, JavaScript Interoperability, templates and Azure deployment. These were the main focus of the workshop, however the app does include a full stack app which includes ASP.NET WebAPI on the back-end and a solid looking design. There's enough extra bits here to keep interested minds busy as they dig in to seeing how the rest of the app is built.

The only real downside to the workshop material is it would be hard to compress and finish in a single day. Conference workshops from my experience are typically single day (8 hour) events. While not impossible, some sections would likely need to be cut or suggested as post-workshop homework. *Is too much good content a bad thing though?*

## Blazor pre-Roadmap Roadmap

There were a few discussions around what could be in the future for Blazor and Razor Components. I took some mental notes, but please keep in mind these were discussions that were not billed as "coming soon" but rather "wouldn't it be cool if...".

Also pure `.wasm` compilation is still within the real of possible. A very early proof of concept style example was used to show the capability, which you can find on Steve's personal GitHub page https://github.com/SteveSandersonMS/il2wasm.

### Blazor Roadmap

Items within reach were also discussed. There are promising things on the horizon, some of which may have shipped in [today's release of ASP.NET Core 3.0 preview 2](https://blogs.msdn.microsoft.com/webdev/2019/01/29/aspnet-core-3-preview-2/).

**Razor Components **

It sounded like the Razor Components story is becoming much clearer. Razor Components are abstracted away from Blazor and allowed to run in other contexts. Razor Components will serve as the component technology to power ASP.NET on the server as well as Blazor. This could mean that Razor Components will likely be used in developing a wide array of web application scenarios. 

Per the 3.0 preview 2 release notes - "Razor Components can be used with your existing Razor Pages and MVC apps. There is no need to rewrite existing views or pages to use Razor Components. Components can be used from within a view or page. When the page or view is rendered, any components used will be prerendered at the same time."

To render a component from a Razor Page or MVC View use:

```
<div id="Counter">
    @(await Html.RenderComponentAsync<Counter>(new { IncrementAmount = 10 }))
</div>
```

**At this time the component only renders and is not interactive.** In other words, the UI will render but you will be unable to invoke behavior like button clicks and other interactive bits. This is a preview of bigger things to come.

**Razor Compiler**

The new Razor Compiler now supports Razor Components. "Visual Studio 2019 comes with built-in editor support for Razor Components including completions and diagnostics in the editor. You don't need to install any additional extensions." Razor compiler includes what we knew as Blazor Language Services. Now when we install the Blazor VSIX it will only be installing the File New Project templates as the rest of the bits are part of ASP.NET 3.0 proper.

Another small yet meaningful announcement is that Razor Components will change file extension to signify the difference between how they are compiled. "In a future preview we plan to introduce a new file extension for Razor Components (.razor) so that you can easily host your components, pages, and views all in the same project."

**Blazor 0.8**

Blazor 0.8 should ship near the same time as ASP.NET Core 3.0. The Blazor releases are intended to ship in "lock step" with ASP.NET Core 3.0 previews. Blazor will continue to improve and attempt to solve blocking issues with payload size and performance. There appears to be an attitude of "when" instead of "if" Blazor will be officially supported. In other words, it's **unlikely** for Blazor to ultimately end up canceled.

**IL Linker**

IL Linker improvements are coming that will improve the accuracy allowing more compatibility with dependencies. This improvement will allow 3rd party packages to include their own IL Linker definitions. The result is our favorite .NET libraries like Newtonsoft JSON will work without disabling the application's IL Linker.

## Conclusion

There's a lot of great things coming down the pipe for ASP.NET Core 3.0 in the form of Razor Components and Blazor. The NDC London workshop was full of insightful materials, discussion and previews of things to come. The current release and roadmap for Blazor is very exciting.