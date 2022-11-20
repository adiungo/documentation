# Content Models

A `Content_Model` represents a grouped collection of data that can have save and delete actions applied
to it. It generally represents a "thing", such as a Tweet, a Mastodon post, a blog post, or something like that.

## Working With Models

Models can be saved, or deleted using their respective `save` and `delete` methods. Each of these methods broadcast
a `Model_Event` that can be observed by platforms. It's up to the _platform_ to actually instruct the model on what to
do when these actions are called.

```php
$model->save();
$model->delete();
```

Models are also responsible for determining if they are identical to another given model. This makes it possible, when
syncing, to determine if a model was changed and needs updated. This is done using the `equals` method.

```php
$model->equals($other_model);
```

## Extending Models

A model is an abstract class, and should be extended by data source integrations. For example, there is likely to be a
Twitter data source, with a Tweet model in the future. This model will include a series of traits and interfaces that
describe what makes up a Tweet, making it possible to set, and get the various properties that make up a Tweet.

It might look something like this:

```php
class Tweet extends Content_Model implements Identifiable_Int Has_Attachment Has_Content Has_Author Has_Published_Date Has_Tags Has_Origin Has_Location{
  use With_Identifiable_Int
  use With_Content
  use With_Author
  use With_Published_Date
  use With_Tags
  use With_Origin
  use With_Location
  
  public function equals(Tweet $tweet): boolean
  {
    return $tweet->get_id() === $this->get_id() && $tweet->get_published_date() === $this->get_published_date();
  }
}
```

This defines _what_ the model is, but it doesn't describe how to actually handle the save/delete actions. Those actions
are done by the platform integration by hooking into the events, like so:

```php
// Save
Content_Model_Event::instance()->attach(Twitter::class, 'save', function(Content_Model_Provider $provider){
  /** @var Tweet $model */
  $tweet = $provider->get_model();
  
  // Do things with the tweet, perhaps adapt it, and then save the content in the way your platform does that.
  // Note that save accounts for both creating, and updating content. It is up to you to determine if it needs saved!
});

// Delete
Content_Model_Event::instance()->attach(Twitter::class, 'delete', function(Content_Model_Provider $provider){
  /** @var Tweet $model */
  $tweet = $provider->get_model();
  
  // Do things with the tweet, perhaps adapt it, and then delete/archive the content.
});
```