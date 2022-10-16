/*
 * --------------------------------------------------------------------------- *
 * File: CartItem.js                                                           *
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

import React from "react";

function CartItem({ item }) {
  const { id, title, price, description } = item;

  const deleteItem = async () => {};
  return (
    <div className="row p-1">
      <div className="col-12 col-sm-6">{title}</div>
      <div className="col-8 col-sm-2 text-right"></div>
      <div className="col-8 col-sm-2 text-right">{price}</div>
      <div className="col-4 col-sm-2 text-right">
        <button className="btn btn-danger" onClick={deleteItem}>
          X
        </button>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
}

export default CartItem;
