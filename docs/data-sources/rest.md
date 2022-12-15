# Rest

The REST data source makes it possible to convert a REST request into a `Content_Model_Collection`.

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

We can import data with this model using a REST endpoint with the REST data source. To do this, we have to create
several classes that ultimately assemble our data source. A good example of how to implement this can be seen
in [this set of integration tests](https://github.com/adiungo/core/blob/main/tests/Integration/Rest_Data_Source_Test.php).

These strategies include:

1. **a data source adapter.** This defines how to convert the REST object into a content model.
1. **a batch request builder.** This builds the request for batch requests, and handles any arguments needed to get the next batch.
1. **a content model instance.** This is the class string for the content model that should be used to build the items
   in the collection. Using the example above, this would be `Sample_Model::class`
1. **a has more strategy.** This determines if there are more items in a batch request.
1. **a http strategy.** This actually makes the HTTP request and gets the body.
1. **a single request builder.** This builds the request for fetching a single post.
1. **a batch response adapter.** This gets the raw array of data from a batch response


Example pulled from the test. In practice, this would probably be in a builder, but Adiungo doesn't enforce how you do this.:

```php
$source = (new Rest())
    ->set_data_source_adapter(new Test_Data_Source_Adapter())
    ->set_batch_request_builder(new Batch_Request_Builder())
    ->set_content_model_instance(Test_Model::class)
    ->set_has_more_strategy(new Has_More_Strategy_Mock())
    ->set_http_strategy(new Http_Strategy_Mock())
    ->set_single_request_builder(new Single_Request_Builder())
    ->set_batch_response_adapter(new Batch_Response_Adapter_Mock());
```

Once you have your source compiled, you can fetch the data.

```php
// Create a request object, and attach it to the batch request builder.
$request = (new Request())
    ->set_url(Url::from('https://example.org/batch'))
    ->set_method(Method::Get)
    ->set_param((new Param('page', Types::Integer))->set_value(1));

$source->get_batch_request_builder()->set_request($request);

// Now get the batch of data, as a content model collection of Sample_Model.
$source->get_data()
```

You can also fetch a single item in a similar fashion. Note that the difference here is the request and we're also
calling `get_single_request_builder` instead of `get_batch_request_builder`.

```php
// Create a request object, and attach it to the single request builder.
$request = (new Request())
    ->set_url(Url::from('https://example.org/single'))
    ->set_method(Method::Get)

$source->get_single_request_builder()->set_request($request);

// Now, get the item 
$id = 123;
$request->get_item($id);
```