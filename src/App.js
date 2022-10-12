/*
 * --------------------------------------------------------------------------- *
 * File: App.js                                                                *
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

import { AppContextProvider } from "./main/context";

import Header from "./components/Header";
import ShopCollection from "./components/ShopCollection";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <ShopCollection />
    </AppContextProvider>
  );
}

export default App;
