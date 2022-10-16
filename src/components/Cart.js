/*
 * --------------------------------------------------------------------------- *
 * File: Cart.js                                                               *
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
import Modal from "react-modal";
import { AppContext } from "../main/context";
import CartItem from "./CartItem";

const customStyles = {
  content: {
    top: "10%",
    left: "10%",
    right: "10%",
    bottom: "10%",
  },
};

// Modal.setAppElement("#cartmodal");

function Cart() {
  const { cart, setCart } = useContext(AppContext);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container-fluid" id="cartmodal">
      <div className="row">
        <div className="col-12 text-center click" onClick={openModal}>
          <h4 className="p-2 mt-4 border border-2 border-success bg-warning">Items: {cart.length}</h4>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Shopping Cart"
      >
        <div className="container-fluid">
          <div className="row  bg-success text-white mb-5 rounded-2 border border-4 border-dark">
            <div className="col-12 text-center">
              <h2>Cart</h2>
            </div>
          </div>
          {cart
            .sort((a, b) => (a.title === b.title ? 0 : a.title > b.title ? 1 : -1))
            .map((c) => (
              <CartItem item={c}></CartItem>
            ))}
        </div>
      </Modal>
    </div>
  );
}

export default Cart;
