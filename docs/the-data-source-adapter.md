# The Data Source Adapter

One challenge that comes with fetching data from different locations is actually converting the raw model data into the
actual model that Adiungo can understand. One way to convert this raw data into a model is to use
the `Data_Source_Adapter` class.

This adapter is baked-into the [CSV Importer][1], but it is also used by other data sources, like [Rest][2].

## Basic Example

Given this [model][3]:

```php
class Custom_Model extends Content_Model implements Has_Name, Identifiable_Int{
    use With_Name;
    use With_Int_Identity;
}
```

And this raw JSON response as an input:

```json
{
  "name": "This is the item",
  "id": 123
}
```

We could convert the model using this adapter:

```php
(new Data_Source_Adapter())->set_content_model_instance(Custom_Model::class)
    // This connects the raw model's "name" value with the "set_name" setter in Custom_Model, and automatically casts the raw model to a string before setting.
    ->map_field('name', 'set_name', Types::String)
    // This connects the raw model's "id" value with the "set_id" setter in Custom_Model, and automatically casts the raw model to an integer before setting.
    ->map_field('id', 'set_id', Types::Integer)
    // this passes in the JSON, and converts it into the Custom_Model, setting the mapped properties.
    ->convert_to_model(json_decode('{"name": "This is the item","id": 123}', true))
```

## Working With Nested Data

The adapter also supports setting nested data using dot notation. Let's change the JSON to nest the "name" value:

And this raw JSON response as an input:

```json
{
  "name": {
    "rendered": "This is the item"
  },
  "id": 123
}
```

We could convert the model by changing the field mapped to set_name to use name.rendered using this adapter:

```php
(new Data_Source_Adapter())->set_content_model_instance(Custom_Model::class)
    // This connects the raw model's "name" value with the "set_name" setter in Custom_Model, and automatically casts the raw model to a string before setting.
    ->map_field('name.rendered', 'set_name', Types::String)
    // This connects the raw model's "id" value with the "set_id" setter in Custom_Model, and automatically casts the raw model to an integer before setting.
    ->map_field('id', 'set_id', Types::Integer)
    // this passes in the JSON, and converts it into the Custom_Model, setting the mapped properties.
    ->convert_to_model(json_decode('{"name": {"rendered":  "This is the item"},"id": 123}', true))
```

## Typecasting With a Closure

Sometimes, it's necessary to typecast using something that isn't a primitive type. It's also possible to set a type
using a closure instead of a `Types` enum. This is useful in cases where you have to construct objects from a single
piece of data, such as a category.

Given this [model][3]:

```php
class Custom_Model extends Content_Model implements Has_Name, Identifiable_Int, Has_Categories{
    use With_Name;
    use With_Int_Identity;
    use With_Categories;
}
```

And this raw JSON response as an input:

```json
{
  "name": "This is the item",
  "categories": [1, 2, 3],
  "id": 123
}
```

We could convert the model using this adapter:

```php
(new Data_Source_Adapter())->set_content_model_instance(Custom_Model::class)
    // This connects the raw model's "name" value with the "set_name" setter in Custom_Model, and automatically casts the raw model to a string before setting.
    ->map_field('name', 'set_name', Types::String)
    // This connects the raw model's "id" value with the "set_id" setter in Custom_Model, and automatically casts the raw model to an integer before setting.
    ->map_field('id', 'set_id', Types::Integer)
    // This will create partial Category objects using the provided ID.
    ->map_field(
        'categories',
        'add_categories',
        // Loop through the categories, and create a category instance and set the ID based on the provided ID.
        fn (array $categories) => Array_Helper::map($categories, fn (string|null $category) => (new Category())->set_id($category))
    )
    // this passes in the JSON, and converts it into the Custom_Model, setting the mapped properties.
    ->convert_to_model(json_decode('{"name": "This is the item","categories": [1,2,3],"id": 123}', true))
```

[1]: /data-sources/csv

[2]: /data-sources/rest

[3]: /models/content-models