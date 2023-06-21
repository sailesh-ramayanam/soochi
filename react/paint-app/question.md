# Description

Create an app that allows users an option to choose colours for given blocks. After choosing colour, users can apply it to the container/s. You have to complete this assignment in `React`. Template code for selecting colour (from ColourSelector component) and selection boxes (in Selection.js file) is already given. Please write only the logic for selecting colour and applying it.

# Requirements

## UI requirements

1. Title of the `Orange` colour selector box should be `Orange`.
2. Title of the `Green` colour selector box should be `Green`.
3. Title of the `Blue` colour selector box should be `Blue`.
4. Colour of the `Orange` colour selector box should be `rgb(221, 112, 18)`.
5. Colour of the `Green` colour selector box should be `rgb(44, 209, 88)`.
6. Colour of the `Blue` colour selector box should be `rgb(34, 193, 195)`.
7. Three selection boxes with no colour inside it at initial render.

## Functional requirements

1. On clicking the colour selector boxes we can select the colour. After that when we click selection boxes, selection boxes colour should change to the selected colour.

## Other requirements

1. First selection box contain an attribute `data-testid` and its value must be `selection1`.
2. Second selection box contain an attribute `data-testid` and its value must be `selection2`.
3. Third selection box contain an attribute `data-testid` and its value must be `selection3`.
4. Selection box contain an attribute `className` and its value must be `fix-box`.
5. Text `Selection` for each selection box must be rendered inside h2 tag.

# Hints

1. For `Selection.js`

- It accepts the prop applyColor
- It render div component with style attribute that takes its value from the component's state variable
- Initially set state variable as {background:''}
- When the component is clicked, state variable should get the value of the nextBackground state variable of the App component. Use applyColor for this.

# Sample UI

[Click here](https://drive.google.com/file/d/16hnrEZ6LVutQZvmJR9udc_rOIxsMl5ff/view?usp=sharing) for the video of a sample UI
[Click here](https://drive.google.com/file/d/19Ry5v6BRVbY3lEZMhP7sBZmAvOAIeOpg/view?usp=sharing) for the image of a sample UI
