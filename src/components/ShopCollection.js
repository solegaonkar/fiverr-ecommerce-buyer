/*
 * --------------------------------------------------------------------------- *
 * File: ShopCollection.js                                                     *
 * Project: ecommerce                                                          *
 * Created Date: 12 Oct 2022                                                   *
 * Author: Vikas K Solegaonkar (vikas@crystalcloudsolutions.com)               *
 * Copyright (c) 2022 Vikas K Solegaonkar                                      *
 * Crystal Cloud Solutions (https://crystalcloudsolutions.com)                 *
 *                                                                             *
 * Last Modified: Wed Oct 12 2022                                              *
 * Modified By: Vikas K Solegaonkar                                            *
 *                                                                             *
 * HISTORY:                                                                    *
 * --------------------------------------------------------------------------- *
 * Date         By     Comments                                                *
 * --------------------------------------------------------------------------- *
 */

import React, { useContext } from "react";
import { AppContext } from "../main/context";
import ShoppingItem from "./ShoppingItem";

function ShopCollection() {
  const { collection } = useContext(AppContext);

  return (
    <div className="container pt-4 mt-4">
      <div className="row">
        {collection.map((item, index) => (
          <ShoppingItem key={index} item={item}></ShoppingItem>
        ))}
      </div>
    </div>
  );
}

export default ShopCollection;
