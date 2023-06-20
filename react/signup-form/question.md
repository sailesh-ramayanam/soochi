# Description
`Form validation` is a process of validation of information that has been entered by a user who is using the application. This is done to ensure that the information entered by the user is valid.
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

1. Add Validation for each input fields. If validation failed then show the respective error message. Given below is expected functionality for each input field and error message which is to be displayed if that functionality fails<br>

    **Note: Show only one error message at a time and they should have the same priority order as given below**

    - Every input field should be filled. If any of the field is missing, display Error Message: `All fields are mandatory`
    - Name must be alphanumeric ({space} allowed). If it is not alphanumeric, display Error Message: `Name is not alphanumeric`
    - Email must contain one @ character. If it doesn't contain @ character, display Error Message: `Email must contain @` 
    - Gender value should be either male or female or other. if it's not one of them, then displayError Message: `Please identify as male, female or others`
    - Phone Number must be number. If it contains string or any other character other than number, display Error Message: `Phone Number must contain only numbers`
    - Password length should at least be 6 characters long. If it doesnt contain a minimum od 6 letter count, display Error Message: `Password must contain atleast 6 letters`
    - Submit Button

2. Default value for gender should be male
3. Do not clear input fields if there are validation errors after submission. Show the appropriate errors.


## Functional requirements

1. On clicking submit button, 
    - Validations should happen 
    - If Validation Passes, Your output should be rendered in the format `Hello {username}`
        - For example refer to *Above Description*  



## Other requirements

1. Form must have the following `Input Fields with given attributes`: 

    - Name: An `input` element should contain an attribute `data-testid` and its value must be `name`. 
    - Email address: An `input` element should contain an attribute `data-testid` and its value must be `email`. 
    - Gender: A `select` element should contain an attribute `data-testid` and its value must be `gender`. 
        (Hint : you can use select and option to create a dropdown)
    - Phone Number: An `input` element should contain an attribute `data-testid` and its value must be `phoneNumber`. 
    - Password: An `input` element should contain an attribute `data-testid` and its value must be `password`, and its type should be set to password. 
    - Submit button: A `button` element should contain an attribute `data-testid` and its value must be `submit`
    
# Sample UI
[Click here](https://drive.google.com/file/d/1zF4iERKUuQcgMKDyBJLNl6U4pquo9W5a/view?usp=sharing) for the image of a sample UI





