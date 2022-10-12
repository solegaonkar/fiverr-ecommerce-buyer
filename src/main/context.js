/*
 * --------------------------------------------------------------------------- *
 * File: context.js                                                            *
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

import React, { useState, createContext } from "react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showNow, setShowNow] = useState("");
  const [cart, setCart] = useState([]);
  const [collection, setCollection] = useState([
    {
      id: "1",
      image: "images/product01.jpg",
      price: 10,
      title: "Tank Top",
      description: "",
    },
    {
      id: "2",
      image: "images/product02.jpg",
      price: 10,
      title: "Polo-Shirt",
      description: "",
    },
    {
      id: "3",
      image: "images/product03.jpg",
      price: 10,
      title: "T-Shirt",
      description: "",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        showNow,
        setShowNow,
        authenticated,
        setAuthenticated,
        cart,
        setCart,
        collection,
        setCollection,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
