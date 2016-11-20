# Bootstrap 4 that Angular 2 App

Since the official release of Angular 2 and the beta release of [Telerik Kendo UI for Angular 2 <i>by Progress</li>](http://www.telerik.com/kendo-angular-ui/), I've been working quite a bit with the Angular 2 CLI. The Angular 2 CLI tool makes short work of creating new Angular 2 projects. 

New Angular 2 projects come extremely bare bones in regards to UI layouts. In fact, there is literally nothing provided out-of-the-box, which I actually prefer.

In this article we'll look at how to start using Bootstrap 4 in a new Angualr 2 project. We'll install Bootstrap 4 using npm, wire up Bootstrap, and highlight the differences between CSS and SASS configuration.

## ng new and Preprocessing

First, let's start with a new Angular 2 project. If you haven't tried the Angular CLI tool yet, you may need to install it. The setup requires just a simple `npm` command. Note: This works on Mac, PC, and Linux, for reference I use Windows.

	npm install -g angular-cli

Once the Angular CLI is installed it's time to create a new app. Creating a new app is as simple as running the `ng new` command, however there's a very important option here that needs to be highlighted. The `ng new` command supports [CSS preprocessor integration](https://github.com/angular/angular-cli#css-preprocessor-integration) and my recommendation is to take advantage by using Sass. Supporting Sass in your project only gives you additional flexibility. Since any valid CSS is also valid Sass (.scss), this means you can use each interchangeably. Even if you're not familiar with Sass, it won't get in your way, and it can be used as little or as much as needed. Additionally, Sass leaves room for Bootstrap customization that is not otherwise available with CSS. Adding Sass is as simple as specifying the option from the CLI.

	ng new bootstrap-project --style=sass
	cd bootstrap-project

## Bootstrap 4, the FAQs

At the time of writing Bootstrap 4 is still in alpha (5.0). An alpha release would normally be a cause for concern, however because I mostly use Bootstrap for its grid which appears to be feature complete, it's a non-issue to me. For details on what's in the beta, the article [What’s New and What’s Changed in Bootstrap 4](http://developer.telerik.com/featured/whats-new-whats-changed-bootstrap-4/) is an excellent overview.

### Installing and Wiring-up Bootstrap 4

Now that we have a new Angualr 2 project, we'll need to install the Bootstrap 4 bits. We'll use `npm` to load the dependency.

	npm install -S bootstrap@4.0.0-alpha.5

With Bootstrap installed we'll need to reference it in the project. When we installed Bootstrap the package brought with it all of Bootstrap's CSS, Sass source code, and JavaScript files. Since we have a Sass enabled project we can use either the Sass source code or the compiled CSS. The files are located at the following paths:

	~bootstrap/dist/css/bootstrap.min.css
	~bootstrap/scss/bootstrap.scss

In the Angular 2 project open `styles.scss` and add a reference to either the .css or .scss Bootstrap file. Note: With Sass, the file extension isn't necessary.

Note: angular-cli.json has a styles [], why not use that...

	/* using css */
	@import "~bootstrap/dist/css/bootstrap.css";
	
	/* using sass */
	@import "~bootstrap/scss/bootstrap";

At this point Bootstrap is ready to use, unless you're interested in Bootstrap's UI components, in which case you'll need to add additional dependencies.

## Bootstrap UI Components

