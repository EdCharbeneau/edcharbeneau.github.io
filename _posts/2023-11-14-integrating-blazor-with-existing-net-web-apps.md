---
layout: post
permalink: /dotnet-8/
title: Integrating Blazor with Existing .NET Web Apps
path: 2023-11-14-integrating-blazor-with-existing-net-web-apps.md
---

ASP.NET's RazorComponent model is intuitive and brings productivity to web development. In this session we'll learn how **RazorComponents** aren't just for **Blazor** apps and how we can integrate the best part of Blazor with existing ASP.NET applications using: Razor Pages, MVC, and even other front-end technologies.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dE-XCUVCkkE?si=8LGh-q3B6OBpx7r_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Blazor from MVC, Blazor from Razor Pages

Because Blazor is part of ASP.NET Core it is possible to mix UI frameworks such as: ASP.NET MVC (Razor Views), Razor Pages, and Blazor. ASP.NET Core's modular middleware system configures how ASP.NET Core responds to requests and routing, this means we can opt into each UI framework and several routing options.

For instructions on setting up Blazor in an existing app, you can look at the official docs. 

[Docs: Integrate ASP.NET Core Razor components into ASP.NET Core apps][1]

The following example application uses a different configuration which predates the documentation linked above. This configuration reuses the existing application's layout making it easier to transition code to Blazor without duplicating the main applications layout and instead uses a _Host.cshtml file to host Blazor (vs. App.razor).

This example also includes usage of the `<component>` tag helper. The `<component>` tag helper allows Razor Views and Pages to display Blazor content. The example incorporates both Telerik UI for Blazor and Telerik UI for ASP.NET Core. The Telerik UI libraries work together with seamless theme capabilities, and support for .NET 8. The Telerik UI libraries require a license to run the application, a [free trial of Telerik DevCraft][2] is available.

[Telerik Eshop ASP.NET Core and Blazor Demo][3]


## Blazor from Angular, Blazor from React

If an application is hosted by ASP.NET Core it can take advantage of Razor Components. Even if the current app does not use one of the ASP.NET Core UI stacks integrating Blazor is still possible. The core of using Razor components in JavaScript apps and SPA frameworks relies on a web standard technology called Custom Elements, part of the [Web Components spec][4]. The following docs explain how to enable Blazor Custom Elements and use them in SPA frameworks.

[Docs: Use Razor components in JavaScript apps and SPA frameworks][5]

This example uses the ASP.NET Core React template and Blazor Custom Elements to render a Blazor element from React.

[https://github.com/EdCharbeneau/ReactAppDotnetConf][6]

This example uses the ASP.NET Core Angular template and Blazor Custom Elements to render a Blazor element from Angular.

[https://github.com/danroth27/BlazorCustomElements][7]

Another .NET Conf session covered React Migration in detail. If you are coming from a React application to ASP.NET Core then this session will be interesting to you.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0_yZinJAn7U?si=tWE-9LIxxwa8d6Ya" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Blazor from WebForms

Similar to the approach above that uses Blazor Custom Elements, WebForms can also take advantage of this technology. Using Blazor Custom Elements in addition to the System Web Adapaters library and a YARP proxy a Razor Component can be rendered within a WebForms app. This is a nice stepping stone in migrating existing WebForms apps to Blazor.

[https://github.com/dotnet/systemweb-adapters/tree/main/samples/WebFormsToBlazor][9]

If you're interested in rewriting your app from scratch using Blazor instead of migrating piecemeal, then give the [Blazor Migration workshop using Telerik UI for Blazor a try][10]. 

## Blazor from Web API

Razor Components can also be rendered directly from Web API, docs on how this is accomplished can be found below.

[Docs: Render Razor ASP.NET Core Web API][11]

## Telerik UI for Blazor

Make sure you check out the full range of capabilities possible with Telerik UI for Blazor. There are over 100 components to help build your next Blazor app. In addtion, Telerik UI for Blazor includes scaffolding tools, document processing libraries, theme options, and templates to enhance productivity.

[Telerik UI for Blazor Demos][12]

### .NET 8 Day 1 Support

Progress Software is proud to announce that multiple Telerik products support NET 8 on day 0! Get started using the next generation of .NET today with support from Progress.

[Telerik UI for Blazor and ASP.NET Core in .NET 8 and Beyond][13]

  [1]: https://learn.microsoft.com/en-us/aspnet/core/blazor/components/integration?view=aspnetcore-8.0
  [2]: https://www.telerik.com/devcraft
  [3]: https://github.com/EdCharbeneau/telerik-eshop-sample-app-aspnetcore
  [4]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
  [5]: https://learn.microsoft.com/en-us/aspnet/core/blazor/components/js-spa-frameworks?view=aspnetcore-7.0
  [6]: https://github.com/EdCharbeneau/ReactAppDotnetConf
  [7]: https://github.com/danroth27/BlazorCustomElements
  [8]: https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-components-outside-of-aspnetcore?view=aspnetcore-8.0
  [9]: https://github.com/dotnet/systemweb-adapters/tree/main/samples/WebFormsToBlazor
  [10]: https://www.telerik.com/campaigns/blazor-workshop-migration
  [11]: https://learn.microsoft.com/en-us/aspnet/core/blazor/components/integration?view=aspnetcore-8.0#return-a-razorcomponentresult-from-an-mvc-controller-action
  [12]: https://demos.telerik.com/blazor-ui
  [13]: https://www.telerik.com/blogs/net-8-support-aspnet-core-blazor
