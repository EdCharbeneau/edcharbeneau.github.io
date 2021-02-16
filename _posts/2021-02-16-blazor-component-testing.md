---
layout: post
permalink: /Blazor-Component-Testing/
title: Blazor Component Testing
path: 2021-02-16-blazor-component-testing.md
date: 2021-02-16
tags: 
- Blazor Testing
- bUnit

---


<p>Web developers are accustomed to the instant feedback the browser provides. Many frameworks even include built in mechanics for refreshing the application in real-time, or &ldquo;hot reloading.&rdquo; Hot reloading is often used to quickly prototype components or features for a given application. While hot reloading is certainly a tool that has its place in web development, it&rsquo;s possible it is relied upon too much. Blazor has yet to provide such a tool although one is <a href="https://github.com/dotnet/aspnetcore/issues/5456" title="" class="" target="">in development</a>. An arguably better alternative is unit testing UI components. A UI component can be isolated, tested and quickly iterated upon just as application logic can be. Through unit testing we can achieve quick results without the overhead of loading the application, or even the browser. To test a Blazor component we&rsquo;ll use a new framework called bUnit which is specifically designed for this purpose.</p>
<h3>bUnit</h3>

| Test Target | UI Component |
|------------------------------------------|------------------------------------------|---|
| Cost           |          <a href="https://bunit.egilhansen.com/" title="" class="" target="">Free</a>          |
| License    | Open Source            |
| Type            | Framework             |
| Interface: Test Runner          |         Visual Studio or CLI compatible            |

<p><strong><br>
bUnit</strong>&nbsp;is a testing library for Blazor Components. Its goal is to make it easy to write&nbsp;comprehensive<em>, </em>stable&nbsp;unit tests. bUnit builds on top of existing unit testing frameworks such as xUnit, NUnit, and MSTest, which runs the Blazor components test as any normal unit test. bUnit runs a test in milliseconds, compared to browser-based UI tests, where a test usually takes seconds to run.</p>
<p>bUnit can setup and define <strong>components under tests</strong> using either C# or Razor syntax. bUnit includes methods to verify component rendering using a semantic HTML comparer. Parameters, cascading values and injecting services into components under are made easy with bUnit&rsquo;s comprehensive helper methods. Even triggering event handlers and exercising a component&rsquo;s interactive features is supported by the library.</p>
<p>Adding a bUnit test project to your application can be done several ways. One of the easiest solutions is to install the bUnit project template and create a new project using the command line. </p>

```bash
dotnet new --install bunit.template
dotnet new bunit -o &lt;NAME OF TEST PROJECT&gt;
```

<p>With the bUnit project created we&rsquo;ll add our project or component library as a reference. </p>
<p>Now we can test individual components in isolation with bUnit. Since we&rsquo;re already familiar with xUnit, we&rsquo;ll continue with the xUnit [Fact] conventions and write our first bUnit test. A common component test is to ensure that a component initializes correctly and renders the appropriate HTML markup. This can be accomplished with bUnit&rsquo;s RenderComponent&lt;TComponent&gt; method.</p>
<p><strong>Component Unit Test Example: Initialization and Rendering</strong></p>
In the following example we&rsquo;ll test the initial rendered Alert component. The component should render a styled div element with an internal close button. The expected rendered HTML is declared as the string expectedMarkup. Since bUnit relies on &ldquo;semantic HTML comparison,&rdquo; the expectedMarkup doesn&rsquo;t need to be exact match, but rather an HTML equivalent match. Aspects that don&rsquo;t affect component behavior or visual representation are ignored, such as: comments, insignificant white space, css class order, and implicit attributes, just to name a few.

```csharp
// bUnit library
using Bunit;
// xUnit framework
using Xunit;
// Component library or Blazor application
using TestableBlazor.Client;

[Fact(DisplayName = "Initial Alert renders correct markup")]
public void AlertInit()
{
    // Render an Alert component
    var cut = RenderComponent&lt;Alert&gt;();

    // Expected HTML rendered
    string expectedMarkup = @"
    &lt;div class=""alert alert-danger""&gt;
        &lt;button type=""button"" class=""close"" aria-label=""Close""&gt;
            &lt;span aria-hidden=""true""&gt;&amp;times;&lt;/span&gt;
        &lt;/button&gt;
    &lt;/div&gt;";

    // Did it match?
    cut.MarkupMatches(expectedMarkup);
}
```

<p>In this test an instance of the Alert component is created, and the component lifecycle is fully completed. The final rendered component markup is then checked against the expected markup.</p>
<p><strong>Component Unit Test Example: Parameter Set</strong></p>
<p>bUnit can go beyond initialization rendering tests and test specific sections of markup based on component parameters. In the next example we&rsquo;ll assume we have a component that has two distinct color themes represented by a CSS class. We can toggle the theme by setting the IsInfo parameter to change the CSS class. The following example renders the component with the parameter set to true and checks only the CSS class attribute on the rendered component.</p>

```csharp
[Fact(DisplayName = "Alert has info theme")]
public void AlertColor()
{
    // Render the component with IsInfo = true
    var cut = RenderComponent&lt;Alert&gt;(parameters =&gt; 
                parameters.Add(p =&gt; p.IsInfo, true));

    // The expected CSS value
    var expectedCss = "alert alert-info";

    // The actual CSS value
    var actualCss = cut.Find("div").GetAttribute("class");

    // Did it match?
    Assert.Equal(expectedCss, actualCss);
}
```

<p>In this test an instance of the Alert component is created, and the component&rsquo;s IsInfo parameter set true. The rendered markup is then checked for the class attribute and the value is validated against the expected CSS class.</p>
<p>Simple component unit tests like these can quickly accelerate the development process. Since the application and browser are not involved the process is much faster and accurate versus manually loading the application and checking the rendered output visually.</p>

<a class="btn btn-primary" href="https://www.telerik.com/blogs/blazor-stability-testing-tools-for-bulletproof-applications" title="Read: Blazor Stability Testing Tools for Bulletproof Applications">
        Read more about Blazor application testing at Telerik.com
      </a>