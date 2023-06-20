# Description
- Create an app that gives ``users an option to choose colors for given blocks``. 
- When a `ColourSelector` component is clicked, the corresponding color is selected. Then, when a `Selection` component is clicked, the selected color is applied to its background. *`Your task is to complete the implementation of the Selection component`*
- You were given App.js
    - It contains three ColourSelector components, which on click changes the nextBackground state variable.
    - It contains three Selection components which accepts the prop applyColor.
- You were given styles 
    - Child.css which goes to Selection.js
- You were also given partially completed boiler-plate code for ColourSelector.js, you need to update passed props

# Requirements

## Functional requirements 

1. Selection.js should accept the `applyColor` prop.[other]
2. Selection.js should render a parent component with the className `fix-box`.[other]
3. The rendered parent component should have a style attribute that takes its value from the component's state variable.[hints]
4. The initial value of the state variable in Selection.js should be { background: '' }.[hints]
5. When a `Selection` component is clicked, the state variable in Selection.js should be assigned the value received from the `applyColor` prop, which is the `nextBackground` state variable from the App component.[rephrase - whatshappening]
6. The parent component in Selection.js should have a child component, an html tag with the text "`Selection`" and the class subheading.[ui]
7. The `Selection` component should be exported as the default export.

# Sample UI
[Click here](https://drive.google.com/file/d/12dSgK_0BRrYRC_DoA1_WUrGDATZg5SoQ/view?usp=sharing) for the video of a sample UI


<p>You want to create an app that gives users an option to choose colors for given blocks. You are given an App that contains a list of three ColourSelector components and a list of three Selection components. The ColourSelector is clicked, the color corresponding to it is selected. Then when a Selection component is clicked, the selected color is applied to its background. You are supposed to complete the implementation of the Selection component that takes a callback from the parent. When the Selection component is clicked, the callback is invoked. (More details in Acceptance Criteria) Also, complete the styling and label of the ColourSelector component.</p>
<br>
<p>Acceptance Criteria</p>
<br>
<p1>1. App.js contains three ColourSelector component, which on click changes the nextBackground state variable.</p><br>
<p>2.App.js contains three Selection components which accepts the prop applyColor.</p><br>
<p>3. Structure Selection.js such that</p><br>
<ul>
<li> a. It accepts the prop applyColor.</li><br>
<li> b.  It renders a div component with className fix-box.</li><br>
<li> c.  This div component should have a style attribute that takes its value from the component's state variable.</li><br>
<li> d.  Initial value of this state variable should be {background:''}.</li><br>
<li>  e. When the component is clicked, this state variable should get the value of the nextBackground state variable of the App component. (Hint: use applyColor for this).</li><br>
<li> f.  The div component should have a child component that's a h2 tag having text ""Selection"" and class subheading.</li><br>
<li> g. Export the Selection component by default.</li><br>
<li>h. Use data-testid="selection1", "selection2", "selection3" for each of the selection box respectively.
<br>
<br>
Refer below video: <a target="_blank" style="text-decoration:underline; color:DodgerBlue;" href="https://shorturl.at/dlH29">https://shorturl.at/dlH29</a>
</ul>
