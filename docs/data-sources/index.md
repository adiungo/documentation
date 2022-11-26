---
sidebar_position: 3
title: Data Sources
---

A Data Source is a single source of data. This data source can be anything, so long as it can create
a `Content_Model_Collection` from the data source.

## Fetching Paginated Data

When importing data, it's generally a good-idea to fetch the data in small batches. This ensures that
a request doesn't time out, and makes it possible to create multiple threads to import data faster.

As such, a data source should also be able to provide the next batch of data. This is accomplished
using the `has_more` and `get_next` methods. These two methods make it possible for an integration to
loop through these items and know when to stop.

```php
<?php
/** @var Data_Source $data_source */
$data_source->get_data()->each((Model $item) => $item->save());

while($data_source->has_more()){
  // Returns the next page of data.
  $data_source = $data_source->get_next();
  
  // Do whatever you need to-do with the data. Perhaps save the items.
  $data_source->get_data()->each((Model $item) => $item->save());
}
?>
```

Typically, these data sources are used by the [Index Strategy](index-strategies) to actually fetch the data. Ideally,
this wouldn't
run in a single thread, but instead run in a separate request using a background process, or something similar.

## Fetching a single item

It's also possible to fetch a single record from a data source, based on the ID. This makes it possible to spot-check,
or update a specific record when-needed.

**WARNING: This approach will make a request each time it is called, and is not appropriate for getting batches of data.
If you have a collection of IDs to retrieve, it's generally better to use `get_data`.**

```php
<?php
/** @var Data_Source $data_source */
$data_source->get_item(123);
?>
```