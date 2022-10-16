/*
 * --------------------------------------------------------------------------- *
 * File: cloud.js                                                              *
 * Project: ecommerce                                                          *
 * Created Date: 16 Oct 2022                                                   *
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

import axios from "axios";

export class Cloud {
  static headers;

  static post = async (url, data) => {
    var response = await axios.post(url, data, Cloud.headers);
    return response.data;
  };

  static get = async (url) => {
    var response = await axios.get(url, Cloud.headers);
    return response.data;
  };

  static setToken = (token) => {
    Cloud.headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
  };
}
