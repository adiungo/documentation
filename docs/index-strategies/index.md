# Index Strategies

Index strategies represent the culmination of things needed to actually index data. A strategy accepts
a [Data Source](/data-sources), and uses that source to loop through the records and save the data.

Different data sources may require different values to be set to them in-order to function. Perhaps it's necessary to
authenticate with a secret, or maybe you're importing a CSV and need to map columns to model properties. Either way,
this is generally a required step to accomplish what's needed. The Index Strategy will take a data source will all of
these set properties, and then use it to index the data.

## Example - Index data from a CSV import

Let's say you have a CSV file that you want to import to the database. To accomplish this, you can make use of
the [CSV Data Source](/data-sources/csv), attach that data source to an index strategy, and then call that strategy to
instruct the system to import, or _index_ the data in the database.

For the sake of this example, let's assume we have a very basic [content model](/content-models) that includes content,
a title, and an author.

```php
class Example_Model implements Has_Title, Has_Content, Has_Author{
  use With_Title
  use With_Content
  use With_Author
}
```

Now, we can associate that model with a CSV import by mapping each column to the various model setters, like so:

```php
// This would probably come from a file_get_contents call.
$csv_data = 'id,author,title,content
1,Alex,"When Twitter Loses, WordPress Wins",Content 1
2,Kara,What It’s Like Working in NICU,Content 2
3,Courtney,How to train your golden to do anything,Content 3
4,Jonathon,Forget capital gains – get dividends,Content 4
5,Kellie,I. Love. You.,Content 5';

$data_source = (new CSV())
                 ->set_model(Example_Model::class)
                 ->map_column('id', 'set_id', Types::Integer)
                 ->map_column('author','set_author', Types::String)
                 ->map_column('title', 'set_title', Types::String)
                 ->map_column('content', 'set_content', Types::String)
                 ->set_csv($csv_data)
```

Finally, we can combine that data source with a data source, and when the time is right use it to index the data.

```php
$strategy = (new Index_Strategy())
              ->set_data_source($data_source);

// When we're ready, we can use this data source. Perhaps this is called in a hook of some sort.
// Calling this would initiate a loop that would go through all CSV files and index the data.
$strategy->index_data();

// Or we can index a single record from the CSV, if we prefer. This would index "When Twitter Loses, WordPress Wins" by "Alex"
$strategy->index_item(1)
```

## Suggested Implementation - Use a Builder

An Index Strategy Builder works kind of like a "template" for an index strategy. They allow you to pre-build common
patterns among different integrations, so you don't have to repeat a lot of the setup every time. We could expand on the
example above and actually make a builder to make it easier to import any CSV that matches this format in the future.

You absolutely don't have to do this - but this helps illustrate how some of the core implementers in Adiungo enables
you to set this kind of thing up.

```php
class Example_CSV_Importer implements Has_Index_Strategy, Has_Data_Source{
  use With_Index_Strategy;
  use With_Data_Source;
  
  public function __construct(string $csv_data){
    $this->set_data_source((new CSV())
                 ->set_model(Example_Model::class)
                 ->map_column('id', 'set_id', Types::Integer)
                 ->map_column('author','set_author', Types::String)
                 ->map_column('title', 'set_title', Types::String)
                 ->map_column('content', 'set_content', Types::String)
                 ->set_csv($csv_data));
   $this->set_index_strategy((new Index_Strategy())->set_data_source($this->get_data_source()));
  }
}
```

Now, when the time comes, you can build this class, and potentially change anything about the data source or index
strategy if needed. Think of this like a "template" that provides sane defaults for your example.

```php
// This would probably come from a file_get_contents call.
$csv_data = 'id,author,title,content
1,Alex,"When Twitter Loses, WordPress Wins",Content 1
2,Kara,What It’s Like Working in NICU,Content 2
3,Courtney,How to train your golden to do anything,Content 3
4,Jonathon,Forget capital gains – get dividends,Content 4
5,Kellie,I. Love. You.,Content 5';

// When we're ready, we can use this data source. Perhaps this is called in a hook of some sort.
// Calling this would initiate a loop that would go through all CSV files and index the data.
(new Example_CSV_Importer($csv_data))->get_index_strategy()->index_data();

// Or we can index a single record from the CSV, if we prefer. This would index "When Twitter Loses, WordPress Wins" by "Alex"
(new Example_CSV_Importer($csv_data))->get_index_strategy()->index_item(1);

// Finally, you can override or change things. Perhaps you have a special csv where the "author" column is called "user"
$importer = (new Example_CSV_Importer($csv_data));

$importer->get_data_source()->map_column('user','set_author',Types::String);

$importer->get_index_strategy()->index_data();

```