# jira-pile-of-poo-web-ext

A browser extension for chrome and firefox decorating Jira tickets in Agile Boards with a smelly pile of poo per day in column.

For more motivation, read the [blog post about JIRA Pile of Poo](https://metamorphant.de/blog/posts/2019-05-24-jira-pile-of-poo-extension/).

## Installing the distribution

See [JIRA Pile of Poo Mozilla Addons page](https://addons.mozilla.org/en-US/firefox/addon/jira-pile-of-poo/).

## Getting started with development

    web-ext run

See upstream documentation for the details:

* [web-ext](https://github.com/mozilla/web-ext) is a helpful tool to automate the lifecycle of firefox extensions
* [Temporary installation in Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) is the manual alternative

## Packaging for submission

    web-ext lint
    web-ext build --overwrite-dest

## Limitations

While Web Extensions are in principle portable between browsers with minor adjustments, the Jira Pile of Poo extension has not been ported yet. We are happy for pull requests in case you do it.
