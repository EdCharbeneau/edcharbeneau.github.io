---
title: C# Extension Methods
---

Extension methods were added in C# 3.0 and ever since they have been an indispensable part of how I write code. In this post we'll look where extension methods are used, the details of what makes up an extension method, and how to create them.

## Extension Methods in The Wild

One of the fundamental reasons that extension methods exist is to support Language Integrated Query (LINQ). If you're using LINQ methods such as .Select or .Where you might not know that these are extension methods. These methods **extend** the types IEnumerable<T> and IQueryable<T> giving us powerful functional programming operators that make short work of iterating collections and interacting with Entity Framework.

ASP.NET MVC is another popular place you may have encountered extension methods. Extension methods are used throughout MVC to provide what is affectionately been named syntactic sugar. This is when a method is created to make the API easier to use or understand. Extension methods are found in View code as HTML Helpers and also found in application code like Middleware. Often times these methods are abstractions built upon more complex methods with many parameters. The abstractions allow developers to use the easier API calls while behind the scenes overloaded methods are called.

    // better example needed here, dig in to some source code
    // @Html.LabelFor(parameters)

    // app.UseSomeMiddleware()

Now that we know how to recognize extension methods, let's understand how they work. With a clear understanding of how they work we can begin creating our own.

## The Anatomy of an Extension Method

## Creating an Extension Method

## Wrapping up

