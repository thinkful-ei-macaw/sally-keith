import React from 'react';
import salleystudent from './img/salleystudent.jpg'

function App() {
  return (
    <main className='App'>
      <header className='App-Header'>
        <h1>Sally Student</h1>
      </header>
      <section className='App-Section1'>
        <img src={salleystudent} alt='salley in the flesh' />
        Lorem Ipsum
      </section>
      <address className='App-Address'>
        Lorem Ipsum Coleg as too verden gecsi
      </address>
      <section className='App-Section2'>
        Look, I did the resume once; this is just to learn react.  I'm leaving it unstyled with lorem ipsum.
      </section>

    </main>
  );
}

export default App;