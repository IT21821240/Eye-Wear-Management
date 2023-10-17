import { React, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { GiShoppingBag } from "react-icons/gi";
import { useCart } from "react-use-cart";
import ShoppingCart from "../components/ShoppingCart";
import "./header.css";

function Header() {
  const [cartsVisibilty, setCartVisible] = useState(false);
  const { addItem, totalUniqueItems, inCart } = useCart();
  return (
    <>
      <header className="header-links">
        <h1>LankaOpticals</h1>
        <div className="header-right">
          <a href="#" className="product-link">
            Harish
          </a>

          {/* <a href="#">Profile icon</a> */}
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user fa-3x" aria-hidden="true"></i>{" "}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
          <button
            className="btn shopping-cart-btn"
            onClick={() => setCartVisible(true)}
          >
            <GiShoppingBag size={24} />

            <span className="product-count">{totalUniqueItems}</span>
          </button>
        </div>
      </header>
      <div>
        <ShoppingCart
          visibilty={cartsVisibilty}
          onClose={() => setCartVisible(false)}
        />
      </div>
    </>
  );
}

export default Header;
