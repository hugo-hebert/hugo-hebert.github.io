
const Footer = ({data}) => {

  const text  = data.text ?? '';
  const links = data.links ?? [];

  return (
    <div className="footer">
      <div className="footer--text">{text}</div>
      <div className="footer--nav">
        {links.map( (link, ix) => {
          return (
            <a href={link.url} className="external" target="hugo_hebert_external">{link.display_value}</a>
          )
        })}
      </div>
    </div>
  )
};

export default Footer;