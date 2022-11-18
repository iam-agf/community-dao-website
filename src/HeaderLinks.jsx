import { Link } from "react-router-dom";
const sections = {"Home":"/", 
                  "Validators":"/validators", 
                  "Chains":"/chains", 
                  "About":"/about"
                }

const HeaderLinks = () => {
    return( 
        <>
        {
            Object.keys(sections).map(function(item, number){
                return(
                    <Link key = {item} to={sections[item]} className="clickable">
                  {item}
                </Link>
              )            
            })
        }
        </>
    );
}

export default HeaderLinks;