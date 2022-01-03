
import get from 'lodash.get';

const Footer = ({data}) => {

  console.log(data);
  const text = get(data, 'attributes.text', '');
  const links = get(data, 'attributes.links', []);
  console.log(links);

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