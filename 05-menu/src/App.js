import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const categories = new Set();
  items.forEach((menuItem) => categories.add(menuItem.category));

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
      return;
    }

    const newMenuItems = items.filter(
      (menuItem) => menuItem.category === category
    );
    setMenuItems(newMenuItems);
  };

  return (
    <main>
      <section className='menu section'>
        <h2>our menus</h2>
        <div className='underline'></div>
        <Categories
          categories={['All', ...categories]}
          filterItems={filterItems}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
