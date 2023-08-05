import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className='navigation'>
      <a href='/' className='brand-name'>
        HippieTaoist Worm Farm
      </a>
      <nav>
        <a href='#'>Books</a>
        <a href='#'>Blog</a>
        <a href='#'>Husbandry</a>
        <a href='#'>Jokes and Memes</a>
        <a href='#'>Products</a>
        <a href='#'>Research</a>
        <a href='#'>Links</a>
      </nav>
    </nav>
  );
}
