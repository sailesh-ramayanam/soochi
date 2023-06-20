# Description
Create a Page which should look similar to an Instagram page. For demo visit *Sample UI* section

# Requirements
## UI requirements

1. Landing Page should be the first viewable page when an user enter's your site and it should have a `click` button
2. PostView Page should have same number of cards as the length of user object data receiving from json-server
3. Your Page should have all the spcified fields visible in the UI
    - name, location, date, image, like button, share icon, number of likes, & description about the post

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


### Instructions to setup local server

- Step 1 : Run below command in terminal/CMD
    ```
    npm i -D json-server
    ```
- Step 2 : Create folder `Mock-data` inside public folder and create file `data.json`
- Step 3 : Paste the data from [sample-data](https://docs.google.com/document/d/1u5yrbjahE5IQu7fEBomBeVLcxmjxmzkfKWeW2boTTmA/edit?usp=sharing) inside data.json
- Step 4 : Go to the public folder through cd command and run the below command in the terminal:
    ```
    npx json-server --watch Mock-data/data.json --port 3004
    ```
- Step 5 : If you open ```http://localhost:3004/user``` in your browser, you should be seeing a json object of user-data
    - Hint : Use fetch call on ```http://localhost:3004/user``` to recieve data from json-server

# Sample UI
[Click here](https://docs.google.com/document/d/1TvKXow5yC09LfpCEg9q7tnS9Ny9r4AhhDCjwc9TffBw/edit?usp=sharing) for the image of a sample UI