<h1>Front End</h1>

<table border="1" width="100%">
    <thead>
        <tr>
            <th width="15%">Page</th>
            <th width="35%">Path</th>
            <th width="40%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Home</td><td>"/*"</td><td>Landing page</td></tr>
        <tr><td>Login</td><td>"/login"</td><td>Login page</td></tr>
        <tr><td>Sign up</td><td>"/register"</td><td>Create account page</td></tr>
        <tr><td>About</td><td>"/about"</td><td>About page</td></tr>
        <tr><td>Plants</td><td>"/plants"</td><td>Page to view all plants</td></tr>
        <tr><td>Add new plant</td><td>"/plants/new"</td><td>Page to view all plants</td></tr>
        <tr><td>Plant details</td><td>/plants/:plantId</td><td>Page to specific plant details</td></tr>
        <tr><td>Edit plant</td><td>/plants/edit/:plantId</td><td>Page to edit plant</td></tr>
        <tr><td>Delete plant</td><td>/plants/confirm_delete/:plantId</td><td>Page to confirm deleting plant</td></tr>
        <tr><td>Edit reminder</td><td>/reminder/edit/:reminderId</td><td>Page to edit reminders *optional*</td></tr>
        <tr><td>All locations</td><td>/locations</td><td>Page for location details</td></tr>
        <tr><td>Add location</td><td>/locations/new</td><td>Page to create new location</td></tr>
        <tr><td>Edit location</td><td>/locations/edit/:id"</td><td>Page to edit the location</td></tr>
        <tr><td>Delete location</td><td>/locations/confirm_delete/:id" </td><td>delete confirmation page for the location</td></tr>
        <tr><td>Location details</td><td>/locations/:id"  </td><td>location details page</td></tr>

</tbody>
</table>

<br /><br />
<h1> User stories 📝</h1>

- <h4>As a user, I want to create a new account🗝️.</h4>

- <h4>As a user, I want to log in to my account🔗.</h4>

- <h4>As a user, I want to add a new plant➕.</h4>

- <h4>As a user, I want to see my plant details👀.</h4>

- <h4>As a user, I want to add, edit, and remove a location for my plant place📍.</h4>

- <h4>As a user, I want to add and delete a reminder for my plant, such as water it or cut it ⏱️.</h4>

- <h4>As a user, I want to edit my plant details✏️.</h4>

- <h4>As a user, I want to delete my plant🗑️.</h4>


<br/><br />
<h1>Tech stack ⚙️</h1>
<ul>
<li>React</li>
<li>Javascript</li>
<li>HTML</li>
<li>CSS</li>
</ul>


<br /><br />
<h1>Icebox Features 🧊</h1>


<h4>Weather-based care recommendations 🌤️</h4>
<h4>Community plant sharing and comments 👥</h4>
<h4>Smart notifications and reminders 🔔</h4>
<h4>Reward system for active users 🏆</h4>
<h4>Expert advice chatbot 🧑‍🌾</h4>
<h4>Multi-language support (Arabic/English) 🌍</h4>

<br /><br />
<h1>Docker installation Instructions 💻</h1>

```bash
git clone https://github.com/majedyalmalki/frontend
cd frontend

docker-compose up -d
```
- <p>Next, run your server</p>

```bash
npm run dev
```

<br />
----> <a style="font-size: 20px" href="https://github.com/majedyalmalki/backend">Backend</a> <----