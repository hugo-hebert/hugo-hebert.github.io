
import Link from "next/link";

const Header = ({data}) => {
  
  const title       = data.title ?? '';
  const navigation  = data.navigation ?? [];

   
  return (
    <header className="main-nav">
      <Link href="/">
        <a className="barebones">
          <h3 className="main-nav--title">{title}</h3>
          <img className="main-nav--icon" src="/favicon.png" width="192" height="192" alt="Logo for Hugo Hébert"/>
        </a>
      </Link>

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