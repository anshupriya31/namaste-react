const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsu-C8khhxq3rfL3cUrV1bjL9fc3lBcCtrU0n8xnbYmkI2r_ccOVPhbConC9jrW90nZZs&usqp=CAU" alt="Image not loading"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        )
    };

export default Header;