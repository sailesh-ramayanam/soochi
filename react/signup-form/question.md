# Description
`Form validation` is an essential aspect of web development. It has multiple advantages.
1. Ensures that user input meets the specified requirements
2. Prevents erroneous or incomplete data from being submitted
3. Secures your application from various attacks

You would have seen *form validation* in multiple contexts - e.g. `Google forms, Sign up forms`

In this assignment, you have to collect details in a form and display a greeting in the format `Hello {username}`. 

### Example 
`Input`

    ```
    Name            : "Mohan Chowdary"
    Email address   : "mohanworks@yahoo.com"
    Gender          : "Male"
    Phone Number    : 9898547989
    Password        : **********
    ```

`Output`

    ```
    Hello Mohan Chowdary
    ```

# Requirements

## UI requirements
1. Form should contain the following fields
    1. Name - text input field
    2. Email - text input field
    3. Gender - drop down field - Male, Female, Others. Default: Male
    4. Phone number - text input field
    5. Password - password field
    6. Submit - button
2. Error message must be shown below the submit button (please refer to `Sample UI` section for details)
3. When greeting message is shown, form must not be shown (please refer to `Sample UI` section for details)

## Functional requirements
1. Following are the validation rules
    1. Every input field should be filled.
        - Error Message: `All fields are mandatory`.
    2. Name must be alphanumeric (i.e. only alphabets and digits. Spaces are allowed).
        - Error Message: `Name must contain only alphabets, digits and spaces`.
    3. Email must contain exactly one @ character.
        - Error Message: `Email must contain exactly one @`.
    4. Phone Number must contain only digits.
        - Error Message: `Phone number must contain only digits`.
    5. Password should contain at least 6 characters.
        - Error Message: `Password must contain at least 6 letters`.
2. If there are multiple errors, display only one error (order of priority is as given above).
    - Suppose password contains only 4 letters and phone number is left blank. Then there are 2 errors. As per the above order, `All fields are mandatory` takes priority over `Password must contain at least 6 letters`. so, you must display only `All fields are mandatory` error.
3. Validation must happen after clicking the submit button.
4. If there are errors, do not clear the input fields. It will help the user to correct the mistakes instead of filling all the details again.
5. Display the error message below the submit button.
6. If there are no errors, display the greeting `Hello {Name}` in a blank page (i.e. Form should not be shown. Only the greeting message must be shown.).

## Other requirements
1. UI elements should have the following attributes 
    1. Name
        - An `input` element
        - Should contain an attribute `data-testid` with value `name`
    2. Email address
        - An `input` element
        - Should contain an attribute `data-testid` with value `email`
    3. Gender
        - A `select` element
        - Should contain an attribute `data-testid` with value `gender`
    4. Phone Number
        - An `input` element
        - Should contain an attribute `data-testid` with value `phoneNumber`
    5. Password
        - An `input` element
        - Type should be set to password
        - Should contain an attribute `data-testid` with value `password`
    6. Submit
        - A `button` element
        - Should contain an attribute `data-testid` with value `submit`
    
# Sample UI
[Click here](https://drive.google.com/file/d/1AgVAmDa8AdXAXgzn50e2vQnr_RAc91rh/view?usp=sharing) for the image of a sample UI





