
import util from "../../util/strapi_utils";

const Header = ({data}) => {

  console.log(data.attributes.navigation);
   
  return (
    <header class="main-nav">
      <a href="/" className="barebones">
        <h3 className="main-nav--title">{data.attributes.title}</h3>
      </a>
      <div className="main-nav--links">
      {
        data.attributes.navigation.map( (nav, ix) => {
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