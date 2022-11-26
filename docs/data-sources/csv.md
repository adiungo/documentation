# CSV

The CSV data source makes it possible to convert a functioning CSV string into a `Content_Model_Collection`.

Generally speaking a CSV import process looks like this:

1. Upload a CSV file onto the site, and specify the content type
1. Map the CSV columns to the different fields in a model
1. Data gets imported in batches based on the size of the CSV.

## Usage

Let's say we have this model:

```php
final class Sample_Model extends Content_Model implements Has_Name, Has_Content, Identifiable_Int
{
    use With_Content;
    use With_Name;
    use With_Int_Identity;
}
```

We can then use that model, map it to our CSV columns, and import it like so:
```php
$source = (new CSV_Data_Source())
    // Set the model that this will set
    ->set_content_model_instance(Sample_Model::class)
    // Map each column in our CSV to the different setters in our model
    ->map_column('content', 'set_content', Types::String)
    ->map_column('name', 'set_name', Types::String)
    ->map_column('id', 'set_id', Types::Integer)
    // Optionally set the offset
    ->set_offset(1)
    // Optionally set the limit, which is the number of items to process in this batch.
    ->set_limit(1)
    // Sets the actual CSV string.
    ->set_csv("id,content,name\r1,\"the content\",alex\r2,\"more content\",stephen\r3,\"another content\",kate\r4,\"even more content\",kara");
```

Once your source is built, you can run the methods detailed in the [data sources](/data-sources) page to loop through, and access items in this CSV.