export const Footer = () => {
  return (
    <footer className='footer-links'>
      <p>
        Designed By <a href='https://github.com/Jeanp78'>@JeanP78</a>
      </p>
      <ul className='links'>
        <li>
          <a
            className='logo'
            target='_blank'
            rel='noreferrer'
            href='https://co.linkedin.com/in/jeanpaulduarte'
          >
            <img src='github.svg' width='30px' alt='' />
          </a>
        </li>
        <li>
          <a
            className='logo'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/Jeanp78'
          >
            <img src='linkedin.svg' width='30px' alt='' />
          </a>
        </li>
      </ul>
    </footer>
  )
}
