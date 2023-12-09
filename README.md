### Website Live Link : https://mundane-book.surge.sh/
# Three Features of "Course Registration" Project 
+ **Course Selection:** Here, whenever users access the application, they will see a list of available courses. There are total 9 available courses, each course is represented as a card with relevant information : course title, course details, price, credit ours etc. After seeing all these, users can select the ones they are interested in by clicking the "Select" button.
+ **Credit Hour Tracking and Price Calculation:** In this application, this feature dynamically calculates and displays the total credit hour and total cost of the selected courses. This works in tandem to provide users with essential information about their selected courses to ensure that they are staying within predefined limits. Here's the limitation: users can't be able to add more than 20 credit hours. 
+ **Error Handling and Toast Notification:** This application is designed to handle error s smoothly, making it easy for users. When users will try to add a course twice or picking too many courses, the application quickly tells users about it. It does this by showing little pop-up message (toast) that explain the problem.

***

# State Management in "Course Registration" Project
Here, in this project, State management is handled using React's useState and useEffect hooks. Here the details discussion is give below:
+ **Fetching Data:** In this project, in the **"Home"** component  the useEffect hook is used to fetch data from allCourse named JSON file and then the fetched data is stored in the **"courses"** state variable. 
+ **State Initialization:** Here, state variables are initialized using the **"useState"** hooks, variables like **"selectedCourse"**, **"courses"**, **"totalCreditHour"**, **"remainingCreditHour"**, **"totalPrice"** are used to store and manage different prices of data.
+ **Updating State:** Here the **"handleSelectBtn"** function is called when a user clicks a button to select a course. It checks if the course is already selected and updates state variables accordingly, including **"selectedCourse"**, **"totalCreditHour"**, **"remainingCreditHour"**, and **"totalPrice"**.
+ **Rendering Components:** As we know, state variables are used to render components and display dynamic data within the JSX. In this application the "Course" component is rendered with data passed as props, allowing the user to see their selected courses and related information.
In conclusion, the **"Home"** component effectively manages state in a React application using the **"useState"** and **"useEffect"** hooks. It initializes and updates state variables to store and display dynamic data, such as selected courses, total credit hours, remaining credit hours, and total prices. This state management pattern is crucial for creating responsive and interactive user interfaces in React.
