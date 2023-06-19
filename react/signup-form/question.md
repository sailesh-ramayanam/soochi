# Description
`Form validation` is a technique that checks the correctness of the user's data.
Form validation is required to prevent web-form abuse by malicious users. You've seen that today a lot of websites validate user's data before submission.
- eg: `Google form, etc.`

Your task is to take a submitted form response and display `Hello {username}`. 
- eg: <br>
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

1. Form must have the following `Input Fields with given attributes`: 

    - Name | data-testid = 'name' 
    - Email address | data-testid = 'email' 
    - Gender | data-testid = 'gender' 
        1. Use `<select>` tag to create a drop-down list for gender field
    - Phone Number | data-testid = 'phoneNumber'
    - Password | data-testid = 'password', type='password' 
    - Submit button | data-testid = 'submit'
2. Your output should be in the format `Hello {username}`
    - For example refer to *Above Description*  

## Functional requirements

1. Add Validation for each input fields. If validation failed then show the respective error message. Given below is expected functionality and error message which is to be displayed if that functionality fails<br>

    **Note: Show only one error message at a time and they should have the same priority order as given below**

    - Every input field should be filled. Error Message: `All fields are mandatory`
    - Name must be alphanumeric ({space} allowed). Error Message: `Name is not alphanumeric`
    - Email must contain one @ character. Error Message: `Email must contain @` 
    - Gender value should be either male or female or other. Error Message: `Please identify as male, female or others`
    - Phone Number must be number. Error Message: `Phone Number must contain only numbers`
    - Password length should at least be 6 characters long. Error Message: `Password must contain atleast 6 letters`

2. Default value for gender should be male
3. Do not clear input fields if there are validation errors after submission. Show the appropriate errors.

# Sample UI
[Click here](https://drive.google.com/file/d/1zF4iERKUuQcgMKDyBJLNl6U4pquo9W5a/view?usp=sharing) for the image of a sample UI





