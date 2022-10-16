/*
 * --------------------------------------------------------------------------- *
 * File: ShoppingItem.js                                                       *
 * Project: ecommerce                                                          *
 * Created Date: 12 Oct 2022                                                   *
 * Author: Vikas K Solegaonkar (vikas@crystalcloudsolutions.com)               *
 * Copyright (c) 2022 Vikas K Solegaonkar                                      *
 * Crystal Cloud Solutions (https://crystalcloudsolutions.com)                 *
 *                                                                             *
 * Last Modified: Sun Oct 16 2022                                              *
 * Modified By: Vikas K Solegaonkar                                            *
 *                                                                             *
 * HISTORY:                                                                    *
 * --------------------------------------------------------------------------- *
 * Date         By     Comments                                                *
 * --------------------------------------------------------------------------- *
 */

import React, { useContext } from "react";
import { AppContext } from "../main/context";

function ShoppingItem({ item }) {
  var { id, title, image, price, description } = item;
  const { cart, setCart } = useContext(AppContext);

  const addToCart = () => {
    setCart([...cart, { id, title, price, description }]);
  };

  return (
    <div className="col-sm-6 col-lg-4 mb-4 click" onClick={(e) => addToCart()}>
      <div className="block-4 text-center border">
        <figure className="block-4-image">
          <img src={image} alt="placeholder" className="img-fluid" />
        </figure>
        <div className="block-4-text p-4">
          <h3>{title}</h3>
          <p className="mb-0">{description}</p>
          <p className="text-dark font-weight-bold">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingItem;
