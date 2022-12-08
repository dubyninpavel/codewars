/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

import logo from '../../images/logo.svg';
import dirReduc from '../../utils/CodeWars/codeWars';

function Codewars() {
  function handleClick() {
    const arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
    const str = 'sTreSS';
    const number = 2149583361;
    console.log(dirReduc(arr));
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
