---
layout: post
permalink: /telerik-ui-for-blazor-grid/
title: Telerik UI for Blazor Grid Demos
path: 2019-24-01-blazor-statehaschanged-01242019.md
---

## Blazor StateHasChanged() Jan. 24, 2019

This week on Blazor StateHasChanged(), we take a tour of the Telerik UI for Blazor Grid. On the show we saw how to install the Telerik UI for Blazor. We learned how to add a local NuGet package, declare dependencies, fetch css styles and use the grid in our project.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gLNyJHX1eAQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Adding the CSS

For the demos LibMan was used to get CSS resources. There are currently 3 themes for Telerik UI for Blazor. Adding this libman.json file to the root of your project will add the dependencies. 

LibMan.json: https://gist.github.com/EdCharbeneau/959ab0c7b171764025a7d05681bebdcd

### Data Binding, Sorting, Paging

Using the Telerik Data Grid we bound data by simply connecting the grid's `Data` parameter with any `IEnumerable<T>`. Paging and Sorting are simply enabled by setting the respective parameters to `true`.

```
<KendoGrid Data=@Orders Pageable=true Sortable=true>
	<KendoGridColumn Field=@nameof(OrderViewModel.Freight) />
	...
</KendoGrid>
```

### Templates

We saw a variety of template options by setting column templates. Starting with a simple data format template and ending with a fully featured delete button column.

To enable simple string formatting a `<Template>` is used within the `<KendoGridColumn>`. The following example will format a date from `10/15/2018 12:00:00 PM` to `10/15/2018`.

```
    <KendoGridColumn Field=@nameof(OrderViewModel.OrderDate)>
        <Template>
            @( $"{(context as OrderViewModel).OrderDate:d}" )
        </Template>
    </KendoGridColumn>
```

Adding a button column follows a similar pattern, but we use a the `@{}` syntax within the template. The button `OnButtonClick` event passes custom parameters to the handler by a simple lambda expression where the argument is the current item in the grid row.

```
    <KendoGridColumn Field=@nameof(OrderViewModel.OrderID)>
        <Template>
            @{
                var item = context as OrderViewModel;
                <KendoButton OnButtonClick=@(()=> HandleDelete(item))>Delete</KendoButton>
            }
        </Template>
    </KendoGridColumn>
```

Full code sample can be found here: https://gist.github.com/EdCharbeneau/b8d4d7aca5d9856204d4b84eb3f00492

## News Items

- [Introducing the Telerik UI for Blazor Early Preview](https://www.telerik.com/blogs/introducing-the-telerik-ui-for-blazor-early-preview)
- [Blazor Converters](http://blazorconverters.surge.sh/)
- [Blazor Full-Stack Web Dev in ASP .NET Core](https://wakeupandcode.com/blazor-full-stack-web-dev-in-asp-net-core/)
- [Blazor Web Workers ](https://lupblazordemos.z13.web.core.windows.net/SWWPage2)
- [Telerik Webinar](https://www.youtube.com/watch?v=EZIuhHtHU28&t=3s)

## Interop Poll

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">If you&#39;re using or interested in using <a href="https://twitter.com/hashtag/Blazor?src=hash&amp;ref_src=twsrc%5Etfw">#Blazor</a>. If you see a library of Blazor JavaScript Interops, do you think:</p>&mdash; Ed Charbeneau #Blazor #StateHasChanged (@EdCharbeneau) <a href="https://twitter.com/EdCharbeneau/status/1088900387258679296?ref_src=twsrc%5Etfw">January 25, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Blazor Community Chat

[Chat with other devs about the Blazor project.](https://gitter.im/aspnet/Blazor#utm_source=notification&utm_medium=email&utm_campaign=unread-notifications) 
