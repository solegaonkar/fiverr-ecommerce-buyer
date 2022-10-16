/*
 * --------------------------------------------------------------------------- *
 * File: ShopCollection.js                                                     *
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

import React, { useContext, useEffect } from "react";
import { Constants } from "../main/constants";
import { Cloud } from "../main/cloud";
import { AppContext } from "../main/context";
import ShoppingItem from "./ShoppingItem";

function ShopCollection() {
  const { collection, setCollection } = useContext(AppContext);

  useEffect(() => {
    Cloud.post(Constants.API, { action: "ITEM_LIST" }).then((value) => setCollection(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
