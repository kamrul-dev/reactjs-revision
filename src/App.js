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
            <h2 style={headingStyle}>How does javascript  work?</h2>
            <p style={{ fontSize: '20px', color: 'green', textAlign: 'justify' }}>
              We know that javascript code runs on the browser. The browser has a browser engine to execute the program. Google chrome has v8 engine, fire-fox has spider monkey engine, internet explorer has chakra engine. Let's take an example v8 engine of chrome browser. When v8 engine takes the javascript code from the js program source files then v8 engine starts parsing the code using “parser”. Then parsing is converted into “Abstract Syntax Tree(AST). After that interpreter ignition converts this Abstract Syntax Tree to “Bytecode” or by using “Just in Time Compiler “optimized machine code”. Just in Time Compiler Increases the performance and code runs faster. In this way javascript code works in v8 engine to execute the program.
            </p>
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
