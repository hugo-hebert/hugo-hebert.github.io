
import util from "../../util/strapi_utils";

const Header = ({data}) => {

  console.log(data.attributes.navigation);
   
  return (
    <header class="main-nav">
      <h1>{data.attributes.title}</h1>
      {
        data.attributes.navigation.map( (nav, ix) => {
          return (
            <a href={nav.url} key={ix}>
              {nav.display_value}
            </a>
          )
        })
      }
    </header>
  )
};

export default Header;