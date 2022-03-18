import logo from './logo.svg';
import './App.css';



const headingStyle ={
  color: 'green',
  backgroundColor: 'lightblue',
  display: 'inline',
  padding: '5px',
  borderRadius: '10px'

}

function App() {
  return (
    <div className="App">
      <h1>This is Blog post</h1>
      {
        <div>
          <article className='blog'>
            <h2 style={headingStyle}>Blog post 1</h2>
            <p style={{fontSize:'20px', color:'green', textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio, corrupti aperiam exercitationem quisquam voluptate labore qui perferendis in error sit fugiat quas iusto minima vero, ipsa quam cupiditate beatae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio, corrupti aperiam exercitationem quisquam voluptate labore qui perferendis in error sit fugiat quas iusto minima vero, ipsa quam cupiditate beatae.</p>
          </article>
        </div>
      }
    </div>
  );
}

export default App;
