import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is Blog post</h1>
      {
        <div>
          <article className='blog'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio, corrupti aperiam exercitationem quisquam voluptate labore qui perferendis in error sit fugiat quas iusto minima vero, ipsa quam cupiditate beatae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio, corrupti aperiam exercitationem quisquam voluptate labore qui perferendis in error sit fugiat quas iusto minima vero, ipsa quam cupiditate beatae.</p>
          </article>
        </div>
      }
    </div>
  );
}

export default App;
