/*
 * --------------------------------------------------------------------------- *
 * File: context.js                                                            *
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

import React, { useState, createContext } from "react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showNow, setShowNow] = useState("");
  const [cart, setCart] = useState([]);
  const [collection, setCollection] = useState([]);

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
