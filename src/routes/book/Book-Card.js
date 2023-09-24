import { Link } from 'react-router-dom';
import { affiliateLinkParameters } from '../../data/affiliateLinkParameters';
import { useState } from 'react';

const BookCard = (props) => {
  const [marketplaces, setMarketplaces] = useState([
    { marketplace: 'Our Store', marketplaceLink: 'http://linktoourstore.com' },
  ]);

  const book = props.book;
  const [finishedLink, setFinishedLink] = useState(book.buyLink[0].marketLink);

  const affiliateLinkBuilder = () => {
    let updatedLink = book.buyLink[0].marketLink+affiliateLinkParameters[0].affiliateParameter;
    // console.log(updatedLink);
    setFinishedLink(updatedLink);
    // console.log('finishedLink: '+finishedLink);
  };

  const tooltipStyles = {
    position: 'fixed',
    background: '#333',
    color: '#fff',
    padding: '5px',
    borderRadius: '5px',
    display: 'none',

  };

  const showTooltip = (event) => {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'block';
    tooltip.style.top = `${event.clientY + 10}px`;
    tooltip.style.left = `${event.clientX + 10}px`;
  };

  // Function to hide the tooltip
  const hideTooltip = () => {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
  };

  return (
    <div
      className='book-card'
      onClick={affiliateLinkBuilder}>

      <Link
        to={finishedLink}
        target='_blank'
        rel='noopener noreferrer'
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}>
        <img
          className='book-cover'
          src={
            book.imgLink
              ? book.imgLink
              : 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
          }
          alt={
            book.imgLink
              ? 'Front Cover Image of ' + book.title
              : 'Default Site Image'
          }
        />
      </Link>
      <div
        id='tooltip'
        style={tooltipStyles}>
        Ctrl+Click to Open in Background Tab
      </div>
    </div>
  );
};

export default BookCard;
