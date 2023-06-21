# Description
Create a landing Page with a clickable button and on clicking the button redirect user to a Page which should look similar to an Instagram pagewith posts visible. For demo visit *Sample UI* section

# Requirements
## UI requirements

1. `Landing` Page should be the first viewable page when an user enter's your site and it should have a `click` button
2. `PostView` Page should have same number of cards as the length of user-posts object data receiving from json-server
3. PostView Page should have all the spcified fields visible in the UI
    - name, location, date, image, like button, share icon, number of likes, & description about the post
4. `NotFound` should be displayed when user try to access any page other than specified pages.(Landing Page, PostView Page) and it should have text `Not found page`

## Functional requirements

1. On clicking `enter` button on the `Landing` page user should redirected to `PostView` page, where user should be able to view Instagram posts

## Other requirements

1. `enter` button element on the `Landing` page should contain an attribute `data-testid` and its value must be `Enter` (Notice the Uppercase `E`)
2. for each user name in the `PostView` page should have respective `data-testid` attribute
    - eg : display names `Siva, Neeraj and Rahul`, should have attribute `data-testid="Siva", data-testid="Neeraj" and data-testid="Rahul"`
3. for each location in the `PostView` page should have respective `data-testid` attribute
    - eg : display locations `Bengaluru, Pune and Hyderabad`, should have attribute `data-testid="Bengaluru", data-testid="Pune" and data-testid="Hyderabad"`
4. for each date in the `PostView` page should have respective `data-testid` attribute
    - eg : display date `12/02/2022, 15/05/2022 and 10/06/2022`, should have attribute `data-testid="12/02/2022", data-testid="15/05/2022" and data-testid="10/06/2022"`
5. set the path `/` for `Landing` Page
6. set the path `/posts` for `PostView` Page


### Instructions to setup local server

- Step 1 : Run below command in terminal/CMD
    ```
    npm i -D json-server
    ```
- Step 2 : Create folder `Mock-data` inside public folder and create file `data.json`
- Step 3 : Paste the data from [sample-data](https://docs.google.com/document/d/1u5yrbjahE5IQu7fEBomBeVLcxmjxmzkfKWeW2boTTmA/edit?usp=sharing) inside data.json 
    - Note: you'll find similar data available in data.json file in your portal, you can use either of them. Both are same.
- Step 4 : Go to the public folder through cd command and run the below command in the terminal:
    ```
    npx json-server --watch Mock-data/data.json --port 3004
    ```
- Step 5 : If you open ```http://localhost:3004/user``` in your browser, you should be seeing a json object of user-data


## Hints and Suggestions
- For all the `Redirection or Routing` use `react-router-dom` package
- Use fetch call on ```http://localhost:3004/user``` to recieve data from json-server

# Sample UI
[Click here](https://docs.google.com/document/d/1TvKXow5yC09LfpCEg9q7tnS9Ny9r4AhhDCjwc9TffBw/edit?usp=sharing) for the image of a sample UI


---
---