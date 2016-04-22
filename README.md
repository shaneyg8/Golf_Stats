# Ionic NavView Example
This simple Ionic app shows how to use ion-nav-view with templates and states.


## Exercises
1. Change the link in state 1 to a button, and use ui-sref instead of href.

2. Add a third state, providing a link to it from state 2.

3. Add a title bar that displays a title for each state/template.

4. Add a back button to move back through the states.

5. Separate the templates into separate files.

6. Separate the JavaScript code into separate files.

## Notes

- You can include templates in index.html itself using a script of type "text/ng-template". They should go in your body tag.

- When you change state, the template for the new state is inserted between the &lt;ion-nav-view&gt; and &lt;/ion-nav-view&gt; tags. Everytime the state changes, the HTML between those tags is replaced.

- ion-nav-view's expect ion-views inside them.

- Title bars (exercise 3) and back buttons (exercise 4) are so common, that ionic lets you add them with very little effort on your part, so Google them rather than trying to write your own.

- Have a look at Ionic's tutorial on routing: [Build an App with Navigation and Routing - Part 1](http://learn.ionicframework.com/formulas/navigation-and-routing-part-1/).
