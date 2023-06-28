# Description

Create a HTML feedback form which should have the following field

- Name
- Portfolio
- Favourite colour
- Likeness range for your favourite colour
- Option to submit the form

# Requirements

## UI requirements

1. Title of the feedback form should be `Feedback Form`.
2. Label `Name` with input field, with placeholder `Enter your name`.
3. Label `Portfolio` with input field, with placeholder `Enter portfolio detail`.
4. Label `Favourite Colour` with select box containing 2 options.
5. Likeness range input field for the question `How much do you like your favourite color? `.
6. Button with the title `Submit`.

Please refer to `Sample UI` section below, for an example.

## Other requirements

1. All input elements must have labels with the `for` property set to the ids of the elements to which they belong.
   - E.g. label for input of name will be `<label for="name"> Name</label>`
2. Input field for `Name` should contain following attribute with corresponding value
   - attribute `id` and its value `name`
   - attribute `type` and its value `text`
   - attribute `minlength` and its value `3`
   - attribute `maxlength` and its value `50`
3. Input field for `Portfolio` should contain following attribute with corresponding value
   - attribute `id` and its value `portfolio`
   - attribute `type` and its value `url`
4. The element for `Favourite Colour` should contain following attribute with corresponding value
   - attribute `id` and its value `favcolour`
5. Input field for `likeness` should contain following attribute with corresponding value
   - attribute `id` and its value `likeness`
   - attribute `type` and its value `range`
   - attribute `minl` and its value `1`
   - attribute `max` and its value `100`
6. All the input field should have an attribute `required`.

## hints

- Use select tag for favourite colour and give id attribute to select tag.
- Inside select tag keep two option tag for options.

# Sample UI

[Click here](https://drive.google.com/file/d/1TPRsLQQnc0LTzMYlL_rC1_1JCwYCMrhq/view?usp=sharing) for the image of a sample UI
