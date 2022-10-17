/*
 * --------------------------------------------------------------------------- *
 * File: Cart.js                                                               *
 * Project: ecommerce                                                          *
 * Created Date: 12 Oct 2022                                                   *
 * Author: Vikas K Solegaonkar (vikas@crystalcloudsolutions.com)               *
 * Copyright (c) 2022 Vikas K Solegaonkar                                      *
 * Crystal Cloud Solutions (https://crystalcloudsolutions.com)                 *
 *                                                                             *
 * Last Modified: Mon Oct 17 2022                                              *
 * Modified By: Vikas K Solegaonkar                                            *
 *                                                                             *
 * HISTORY:                                                                    *
 * --------------------------------------------------------------------------- *
 * Date         By     Comments                                                *
 * --------------------------------------------------------------------------- *
 */

import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { AppContext } from "../main/context";
import CartItem from "./CartItem";

import { Constants } from "../main/constants";
import { Cloud } from "../main/cloud";

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
  const [showNow, setShowNow] = useState("CART");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cardNo, setCardNo] = useState("");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setShowNow("CART");
    setIsOpen(false);
  }

  function afterOpenModal() {}

  const placeOrder = async () => {
    if (!name) {
      alert("Please provice your name");
      return;
    }
    if (!address) {
      alert("Please provice a shipping address");
      return;
    }
    if (!cardNo) {
      alert("Please provice your credit card no");
      return;
    }
    var pList = cart.map((c) =>
      Cloud.post(Constants.API, {
        action: "ADD_ORDER",
        data: { buyerAddress: address, buyerName: name, price: c.price, title: c.title },
      })
    );
    await Promise.all(pList);
    setAddress("");
    setName("");
    setCardNo("");
    setCart([]);
    alert("Order placed successfully");
    setIsOpen(false);
  };

  const viewItems = () => (
    <div className="container-fluid text-right">
      <div className="row  bg-success text-white mb-5 rounded-2 border border-4 border-dark">
        <div className="col-12 text-center">
          <h2>Cart</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 pb-4">
          <h3>Total: {(cart.length ? cart : [{ price: 0 }]).map((a) => a.price).reduce((a, b) => a + b)}</h3>
        </div>
      </div>
      {cart.map((c, i) => (
        <CartItem
          item={c}
          remove={(e) => {
            var a = [...cart];
            a.splice(i, 1);
            setCart(a);
          }}
        ></CartItem>
      ))}
      {cart.length ? (
        <button className="btn btn-danger" onClick={(e) => setShowNow("CHECKOUT")}>
          Checkout
        </button>
      ) : (
        <></>
      )}
    </div>
  );

  const viewCheckout = () => (
    <div className="container-fluid">
      <div className="row  bg-success text-white mb-5 rounded-2 border border-4 border-dark">
        <div className="col-12 text-center">
          <h2>Checkout</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-right pb-4 mb-4">
          <h3>Total: {(cart.length ? cart : [{ price: 0 }]).map((a) => a.price).reduce((a, b) => a + b)}</h3>
        </div>
        <div className="col-12 p-5 border border-dark border-2 rounded-3">
          <h4>Delivery Details</h4>
          <input
            type="text"
            className="wide p-2 mb-4"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            className="wide p-2 mb-4"
            value={address}
            placeholder="Delivery Address"
            onChange={(e) => setAddress(e.target.value)}
          ></input>
          <input
            type="text"
            className="wide p-2 mb-4"
            value={cardNo}
            placeholder="Credit Card No"
            onChange={(e) => setCardNo(e.target.value)}
          ></input>
          <button className="btn btn-danger" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid" id="cartmodal">
      <div className="row">
        <div className="col-12 text-center click" onClick={openModal}>
          <h4 className="p-2 mt-4 border border-2 border-success bg-warning">Cart Items ({cart.length})</h4>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Checkout"
      >
        {showNow === "CART" ? viewItems() : viewCheckout()}
      </Modal>
    </div>
  );
}

export default Cart;
