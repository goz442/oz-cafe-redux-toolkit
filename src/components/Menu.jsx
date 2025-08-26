import { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import OrderModal from "./OrderModal";

function Menu() {
  const menu = useSelector(state => state.menu); // ✅ state.menu 구조 확인
  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);

  if (!menu)
    return <div style={{ textAlign: "center", margin: "80px" }}>메뉴 정보가 없어요!</div>;

  const categories = Object.keys(menu); // ✅ menu.커피, menu.논커피 접근 가능
  return (
    <>
      {categories.map(category => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="menu">
            {menu[category].map(item => (
              <Item
                key={item.id}
                item={item}
                clickHandler={() => {
                  setModalMenu(item);
                  setModalOn(true);
                }}
              />
            ))}
          </ul>
        </section>
      ))}
      {modalOn && <OrderModal modalMenu={modalMenu} setModalOn={setModalOn} />}
    </>
  )
}

export default Menu;
