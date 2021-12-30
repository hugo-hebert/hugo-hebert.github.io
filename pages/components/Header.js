
import util from "../../util/strapi_utils";

const Header = ({data}) => {

  console.log(data.attributes.navigation);
   
  return (
    <header class="main-nav">
      <h3>{data.attributes.title}</h3>
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