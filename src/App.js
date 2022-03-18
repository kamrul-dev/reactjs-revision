import logo from './logo.svg';
import './App.css';



const headingStyle = {
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
            <p style={{ fontSize: '20px', color: 'green', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio, corrupti aperiam exercitationem quisquam voluptate labore qui perferendis in error sit fugiat quas iusto minima vero, ipsa quam cupiditate beatae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio, corrupti aperiam exercitationem quisquam voluptate labore qui perferendis in error sit fugiat quas iusto minima vero, ipsa quam cupiditate beatae.</p>
          </article>
        </div>
      }
      {
        <div>
          <Blog heading='Programming of Hablu' author='Jahakar Mahbub'></Blog>
          <Blog heading='Bolod to boss of programming' author='Jahakar Mahbub'></Blog>
          <Blog heading='Chowddow ghusthi of programming' author='Jahakar Mahbub'></Blog>
        </div>
      }
    </div>
  );
}

function Blog(props) {
  return (
    <div className='book-author'>
      <h2>Book Name: {props.heading}</h2>
      <h3>Author: {props.author}</h3>
    </div>
  )
}

export default App;
