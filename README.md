# jira-pile-of-poo-web-ext

A browser extension for chrome and firefox decorating Jira tickets in Agile Boards with a smelly pile of poo per day in column.

For more motivation, read the [blog post about JIRA Pile of Poo](https://metamorphant.de/blog/posts/2019-05-24-jira-pile-of-poo-extension/).

## Installing the distribution

See 
* [JIRA Pile of Poo Mozilla Addons page](https://addons.mozilla.org/en-US/firefox/addon/jira-pile-of-poo/) resp.
* [JIRA Pile of Poo Chrome Extension page](https://chromewebstore.google.com/detail/jira-pile-of-poo/edgiincehhapjloplfkgdckojddpdgpc).

## Getting started with development

    web-ext run

See upstream documentation for the details:

* [web-ext](https://github.com/mozilla/web-ext) is a helpful tool to automate the lifecycle of firefox extensions
* [Temporary installation in Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) is the manual alternative

If you are using Ubuntu Linux, you will probably want to install the [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) instead of the firefox snap, which does not work with `web-ext`.

## Packaging for submission

    web-ext lint
    web-ext build --overwrite-dest

## Limitations

While Web Extensions are in principle portable between browsers with minor adjustments, the Jira Pile of Poo extension has not been ported to more exotic browsers, yet. We are happy about pull requests.
