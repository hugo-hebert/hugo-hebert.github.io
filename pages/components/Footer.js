
import get from 'lodash.get';

const Footer = ({data}) => {

  const text = get(data, 'attributes.text', '');
  const links = get(data, 'attributes.links', []);

  return (
    <div className="footer">
      <div className="footer--text">{text}</div>
      <div className="footer--nav">
        {links.map( (link, ix) => {
          return (
            <a href={link.url} className="external">{link.display_value}</a>
          )
        })}
      </div>
    </div>
  )
};

export default Footer;