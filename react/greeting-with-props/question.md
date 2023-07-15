# Description

We want to create a welcome page for new students when they login to our site.
Instead of showing same message to everybody, we want to customise the message by showing the student's name. The message should be as follows.

`Hello <name>!`<br/>
`Welcome to 10x Academy`

# Requirements

## UI requirements

1. The web page should show the following message.

   `Hello <name>!`<br/>
   `Welcome to 10x Academy`

   - Example:<br/>
      `Hello Ravi!`<br/>
      `Welcome to 10x Academy`

## Functional requirements

1. Isolate the greeting text from the main component (viz. `App`).
2. Use `Welcome` component to render the greeting.
3. `Welcome` component must take a `name` prop, which should then be used to customise the greeting.

## Other requirements

1. `Hello <name>!` must be rendered inside an `h1` tag.
2. `Welcome to 10x Academy` must be rendered inside an `h2` tag.
3. `h1` tag should contain an attribute `data-testid` and its value must be `result` (Notice the lowercase `r`).

# Sample UI

[Click here](https://drive.google.com/file/d/1Tu178ynuiQC45Pg0J5BwYtMwEMmVFPT2/view?usp=sharing) for the image of a sample UI
