import HeaderLinks from "./HeaderLinks";

const HeaderBurger = ({closeBurger}) => {
    return ( 
        <div className="headerBurger" onClick={closeBurger}>
            <div className="child-burger">
                <HeaderLinks/>
            </div>
        </div>
     );
}

export default HeaderBurger;