import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getDataFromLocal = () => {
  const items = JSON.parse(localStorage.getItem("item"));

  if (items) {
    return items;
  } else {
    return [];
  }
};

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState(getDataFromLocal());
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    show: false,
    msg: "",
    type: "success",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleAlertShowing();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [itemList]);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(itemList));
  }, [itemList]);

  const handleAlertShowing = (show = false, msg = "", type = "success") => {
    setAlertMsg({ show, msg, type });
  };

  /**
   *
   * @param {string} id
   */
  const handleRemoveItem = (id) => {
    const newItemList = itemList.filter((item) => item.id !== id);
    setItemList(newItemList);
    handleAlertShowing(true, "Item Removed successfully", "danger");
    setItem("");
  };

  const handleEditItem = (id) => {
    const itemTarget = itemList.find((item) => item.id === id);
    setItem(itemTarget.title);
    setEditId(id);
    setIsEditing(true);
    document.getElementsByTagName("input")[0].focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      handleAlertShowing(true, "Please enter a valid value", "danger");
      return;
    } else if (item && isEditing) {
      // functionality for editing
      setItemList(
        itemList.map((itemList) => {
          if (itemList.id === editId) {
            return { ...itemList, title: item };
          }
          return itemList;
        })
      );

      setEditId(null);
      setIsEditing(false);
      handleAlertShowing(true, "Item Edited successfully");
    } else {
      setItemList((i) => [...i, { id: Date.now(), title: item }]);
      handleAlertShowing(true, "Item Added successfully");
    }
    setItem("");
  };

  return (
    <section className="section">
      <section className="section-center">
        {alertMsg.show && <Alert {...alertMsg} />}

        <form onSubmit={handleSubmit} className="grocery-form">
          <h3>To do list</h3>

          <div className="form-control">
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="grocery"
              type="text"
            />
            <button className="submit-btn" type="submit">
              {isEditing ? "Edit Item" : "Add Item"}
            </button>
          </div>
        </form>

        {itemList.length > 0 && (
          <>
            <div className="grocery-container">
              {itemList.map((iteming) => {
                return (
                  <List
                    key={iteming.id}
                    {...iteming}
                    onRemoveItem={handleRemoveItem}
                    onEditItem={handleEditItem}
                  />
                );
              })}
            </div>

            <button onClick={() => setItemList([])} className="clear-btn">
              Clear all
            </button>
          </>
        )}
      </section>
    </section>
  );
}

export default App;
