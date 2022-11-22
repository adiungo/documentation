# Implementers

Many items in Adiungo eschew relying on the constructor, in-favor of
a [builder pattern](https://refactoring.guru/design-patterns/builder), with fluent-style setters and getters to build
something. This makes it possible to set various properties on something when-necessary, and always ensure the property
is type-safe.

A side effect of this approach is the potential for code-duplication, where you find yourself writing the same setter,
and getter in multiple places. Different classes, with entirely different purposes, can require the same setter and
getter. Consider `get_title`and `set_title`, for example. These setters/getters could mean something very different
depending on what kind of model they're in. A blog post title, and a person's title, mean different things, but
programmatically speaking they're both strings.

To work around this, Adiungo creates setters and getters using a combination of a
PHP [trait](https://www.php.net/manual/en/language.oop5.traits.php)
and [interface](https://www.php.net/manual/en/language.oop5.interfaces.php), called implementers. It follows a pattern,
where the interface is `Has_{name}` and the trait is `With_{name}`, where `{name}` is the name of the property that is
being implemented.

## Example - A model with a title, and content

```php
class Blog_Post extends Content_Model implements Has_Title, Has_Content{
  use With_Title;
  use With_Content;
}

// The setters and getters are provided by the interface/trait combos.
$post = (new Blog_Post())->set_title('hello world!')->set_content('This is my first blog post.');

echo $post->get_title() . ' ' . $post->get_content(); // hello world! This is my first blog post.

// This also makes it possible to validate content in cases where you aren't sure if something will have a property
if($post instanceof Has_Excerpt){
  echo $post->get_excerpt();
}
```

This approach has several benefits:

1. You don't need to write unit tests for the setters and getters.
2. Creating a new model is usually as simple as implementing interfaces, and using the corresponding traits.
3. You can confirm that something can actually use the methods you intend to use with `instanceof`
4. This approach avoids pitfalls that come from inheritance-based approaches, and uses compilation instead. You _can_
   still use inheritance, but this approach keeps it as shallow as possible.

## List of Existing Properties

### Has_Attachments, With_Attachments

Used to describe something that can have [attachments](/collections/attachments). Provides a way to get a collection of attachments, add
attachments, and remove attachments, and a check to see if the model has any attachments at all.

### Has_Author, With_Author

Used to describe something that can have an author name, as a string.

### Has_Categories, With_Categories

Used to describe something that can have [categories](/collections/categories). Provides a way to get a collection of categories, add
categories, and remove categories, and a check to see if the model has any categories at all.

### Has_Content, With_Content

Used to describe something that can have content, as a string.

### Has_Data_Source, With_Data_Source

Used to describe something that can have a [data source](/data-sources).

### Has_Excerpt, With_Excerpt

Used to describe something that can have an excerpt, as a string.

### Has_Index_Strategy, With_Index_Strategy

Used to describe something that can have an [index strategy](/index-strategies).

### Has_Location, With_Location

Used to describe something that has a [location](/models/location).

### Has_Name, With_Name

Used to describe something that has a name, as a string.

### Has_Origin, With_Origin

Used to describe something that has an original location, as an Underpin `URL` object.

### Has_Published_Date, With_Published_Date

Used to describe something that has a published date, as a `DateTime`.

### Has_Tags

Used to describe something that can have [tags](/collections/tags). Provides a way to get a collection of tags, add
tags, and remove tags, and a check to see if the model has any tags at all.

### Has_Updated_Date, With_Updated_Date

Used to describe something that has a updated date, as a `DateTime`.