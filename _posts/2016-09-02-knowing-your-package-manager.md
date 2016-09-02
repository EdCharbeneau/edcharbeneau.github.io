---
layout: post
title: Knowing Your Package Manager
permalink: /knowing-your-package-manager/
path: 2016-09-02-knowing-your-package-manager.md
---

![](/img/posts/css_preprocessing_header.jpg)

With three different package managers, an ASP.NET Core project might seem like a busy place, however each package manager fulfills a specialized need. Choosing between package managers means picking the right tool for the job. In the case of ASP.NET Core, that job can be Node-based JavaScript tooling, client-side development libraries, or server-side .NET application components.

npm (Node Package Manager) is a JavaScript package manager. npm packages are commonly for Node.js and Node-based tools like Grunt and Gulp.
Bower was designed to for use with front-end development packages. Ideally these are items that will be deployed with the application, like Bootstrap, for instance.
NuGet is the package manager for .NET. From .NET Core and Visual Studio 2015 and forward, NuGet should be primarily used for installing .NET application components.

<table class="tbl" cellpadding="0" cellspacing="0">
<thead>
<tr>
<th> Package Manager </th>
<th> Responsibility </th>
</tr>
</thead>
<tbody>
<tr>
<td> NPM </td>
<td>  JavaScript (node.js) tooling </td>
</tr>
<tr>
<td> Bower </td>
<td> Client-side Development </td>
</tr>
<tr>
<td> NuGet </td>
<td> .NET Application components </td>
</tr>
</tbody>
</table>

You can learn more about how these package managers are used, along with each of the new task runners available in .NET Core by checking out the full article "[CSS Preprocessing with Visual Studio](http://developer.telerik.com/featured/css-preprocessing-with-visual-studio/)" on the [Telerik Developer Network.](http://developer.telerik.com/)