
import get from 'lodash.get';

const Header = ({data}) => {
  
  const title = get(data, 'attributes.title', '');
  const navigation = get(data, 'attributes.navigation', []);

   
  return (
    <header className="main-nav">
      <a href="/" className="barebones">
        <h3 className="main-nav--title">{title}</h3>
      </a>
      <div className="main-nav--links">
      {
        navigation.map( (nav, ix) => {
          return (
            <a href={nav.url} key={ix}>
              {nav.display_value}
            </a>
          )
        })
      }
      </div>
    </header>
  )
};

export default Header;