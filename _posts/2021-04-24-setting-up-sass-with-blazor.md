---
layout: post
permalink: /2021--04--24-setting-up-sass-with-blazor/
title: Setting Up Sass with Blazor
path: 2021-04-24-setting-up-sass-with-blazor.md
date: 2021-04-24
tags: blazor, scss
---

I've been using Sass (.scss) for web design for quite a few years now. I learned Sass from some of the best, working primarily with contributors who built the Foundation framework over at Zurb. While Foundation and Bootstrap have slowly declined in popularity, Sass holds strong and still offers features that exceed the basics of CSS. During my experience with Sass I've seen the framework evolve from a Ruby based tool, to libsass. With that transition the installation process has gotten shorter and simpler as well.

In this article I'll show you how to get Sass working in your Blazor project in _ short steps. It won't require gulp, grunt, webpack or any additional tools, just a simple package.json file and npm script as all you need.

## Setting Up Your Blazor Project for Sass

In order to install and run Sass you'll need a package.json file. If you already have one you can skip this step. I'm going to assume you already have the Node tools as they come with most SDK's these days.

In your Blazor application, in the root folder where the client resources are found (ex: the project where your wwwroot and css is located) run the `npm init` command.

```bash
npm init
```

Just spam the enter key as it takes you through each step until the process completes. This will produce a package.json file. The package.json file is where we will install the Sass tool and script to run it.

## Installing Sass

Now that we have a package.json file in our project we can install Sass. To install the Sass compiler simply run the command `npm install sass --save-dev`.

```bash
npm install sass --save-dev
```

Alternatively, you can add the line manually to your package.json file.

```json
  ...,
  "devDependencies": {
    "sass": "<version>"
  },
```

No there's not additional steps, that's all it takes to install Sass, now we just need to invoke the compiler to do its thing.

## Compile Sass In One Step

Lastly, we need to tell the Sass compiler what to do. Open the package.json file and add an script to execute the compiler using `npx` (node package execute). The Sass tool takes a very simple set of arguments, input and output.

> A note on npm vs. npx: Npm is a tool that use to install packages. Npx is a tool that use to execute packages.

The completed script should look like the following.

```json
[package.json]
...
  "scripts": {
    "sass": "npx sass ./mypath/site.scss ./wwwroot/css/site.css",
  },
...
```

## Add a Watch Script

This step is optional, but highly recommended. In this step, we'll add an additional script that will run a watch command. If you're not familiar with a watch command, this simply tells Sass to look for changes and execute automatically when a change is detected.

```json
[package.json]
...
  "scripts": {
    "sass": "npx sass ./mypath/site.scss ./wwwroot/css/site.css",
    "sass:watch": "npx sass --watch ./mypath/site.scss ./wwwroot/css/site.css"
  },
...
```

## Run the Script

With the scripts added we can return to the command line and run the npm script.

```bash
npm run sass
```

If you want to watch instead, simply append the `watch` suffix to your command.

```bash
npm run sass:watch
```

## That's All

This is really all it takes. It's only a few simple steps with no additional tooling required (Gulp, Grunt, Webpack). You're ready to write and compile Sass in your Blazor app now.

You might be asking yourself why every Google search turned up massive multi-step articles about Gulp, Grunt, or Webpack; well it's my opinion that this *was* the way to do it, up until a point. As SPA frameworks evolved, Sass was included by default with the desired framework. Setting up Sass was well documented with Gulp, Grunt and Webpack, and remains well indexed today. As new frameworks adopted Sass and internalized it, nobody documented how to work Sass independent of a framework. The requirements and steps got easier and fewer, but this was no longer important enough to blog about. Leaving us where we are today, with Sass super easy to install, but looking for documentation turns up age old tutorials of when it used to be difficult.

## But What About CSS Isolation

While I understand that people feel they have a need for CSS isolation, I still feel strongly that it's an anti-pattern. Yep, just think about it, you're basically taking the Cascade out of CSS. So, you wont find guidance here. I can say it should work, but I can imagine some up hill battle with generating a .css file for each .sass file, per component. (shrug)

If you're already using Sass, and considering CSS Isolation, you may want to ask "what is isolation giving me that I don't already have with Sass".

## TLDR

Add or merge the following `package.json` settings.

```json
[package.json]
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "sass": "npx sass ./mypath/site.scss ./wwwroot/css/site.css",
    "sass:watch": "npx sass --watch ./mypath/site.scss ./wwwroot/css/site.css"
  },
  "devDependencies": {
    "sass": "1.32.11"
  },
  "author": "",
  "license": "ISC"
}
```

Run the following commands.

```bash
npm install (first time only)
npm run sass
(or)
npm run sass:watch
```