/* eslint-disable no-unused-vars */
import zeros1 from '../../utils/CodeWars/codeWars';

import logo from '../../images/logo.svg';

function Codewars() {
  function handleClick() {
    const arr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
    const str = 'Pig latin is cool !';
    const number = 25;
    console.log(zeros1(number));
  }

  return (
    <div className="codewars">
      <header className="codewars__header">
        <h1 className='codewars__title'>Codewars</h1>
        <img src={logo} className="codewars__logo" alt="logo" />
        <a
          className="codewars__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type='button' className='codewars__button' onClick={handleClick}>Click Me</button>
      </header>
    </div>
  );
}

export default Codewars;
