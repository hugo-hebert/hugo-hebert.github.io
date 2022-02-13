
const Footer = ({data}) => {

  const text  = data.text ?? '';
  const links = data.links ?? [];

  const toReplaceString = '{{currentYear}}';
  const year = new Date().getFullYear();
  const disclaimer = data.disclaimer?.replace(toReplaceString, year) ?? '';

  return (
    <div className="footer">
      <div className="footer--row">
        <div className="footer--text">{text}</div>
        <div className="footer--nav">
          {links.map( (link, ix) => {
            return (
              <a href={link.url} className="external" target="hugo_hebert_external">{link.display_value}</a>
            )
          })}
        </div>
      </div>

      <div className="footer--row">
        <span class="footer--discalimer">
          {disclaimer}
        </span>
      </div>
    </div>
  )
};

export default Footer;