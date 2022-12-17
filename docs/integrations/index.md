# Integrations

An integration is a collection of [index strategies](/index-strategies), [content models](/models/content-models) that
are used in-combination to actually index
content from different online services. These integrations are responsible for creating builders that make it easy for a
platform to set up an integration with a site.

For example, let's say your [platform](/supported-platforms) of choice is a WordPress website that you regularly publish
content on, and you want to automatically capture that content and index it on your own site. Normally, this would
require several classes to fully build the [REST data source](/data-sources/rest) needed to accomplish this. To work
around this, it's most-likely better to use the [WordPress integration](/integrations/wordpress). These integrations
include [builder](https://refactoring.guru/design-patterns/builder) classes that will automatically build these data
sources for you, requiring minimum input.