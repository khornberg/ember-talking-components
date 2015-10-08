# Ember-talking-components

How does one ember component talk to another without the use of a controller?

Answer: the ember event bus.

Using the event bus allows loosely coupled components. It likely violates actions up, data down as it is more actions across, data across.

The likely use cases are communicating non-model data as [jabene asks](http://discuss.emberjs.com/t/communication-between-components/7353/3).

The advantages are that this does not require using a wrapper or container nor require a component to only communicate with children.

In response to [solsberg question](http://discuss.emberjs.com/t/how-to-communicate-to-child-components/7772), yes use the event bus.

This is not an original idea as [Paul Cowan](http://www.thesoftwaresimpleton.com/blog/2015/04/27/event-bus/) and [Frank Treacy](http://emberigniter.com/parent-to-children-component-communication/) showed me how to do this with their articles.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
