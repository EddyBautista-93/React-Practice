import logo from '../logo.svg'
const Info = () => {
    return ( 
    <div>
        <img src={logo} className="App-logo App-Header" alt="logo" />
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    );
}
 
export default Info;