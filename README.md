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

* Only chrome and firefox: While Web Extensions are in principle portable between browsers with minor adjustments, the Jira Pile of Poo extension has not been ported to more exotic browsers, yet. We are happy about pull requests.
* Only Jira Data Center: Feel free to file a PR for Jira Cloud.

## Testing with Jira

If you don't have a Jira instance at hand, install a [Jira Software Data Center trial version](https://www.atlassian.com/software/jira/download/data-center). Just follow Atlassian's instructions.

## Packaging for Chrome

* Switch to branch [`chrome`](https://github.com/JohannesFKnauf/jira-pile-of-poo-web-ext/tree/chrome)
* Migrate changes from branch `master`
* Open chromium developer version, or install it e.g. using `npx @puppeteer/browsers install chrome@stable`
* Open [chrome://extensions/](chrome://extensions/)
* Turn on developer mode (toggle in the upper right corner of the window)
* "Load unpacked"
* Choose the directory `chrome-package/` in your repo checkout
* "Pack extension" and follow instructions
* Open [Chrome developer console](https://chrome.google.com/webstore/devconsole/)
* Update plugin
