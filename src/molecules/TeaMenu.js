import React, { useEffect, useState } from 'react';
import TeaItem from './TeaItem';

const TeaMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const jsonFileName = './data/menu.json';

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(jsonFileName);
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenuData();
  }, []);

  const removeFromMenu = (itemId) => {
    setMenuData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h2>Tea Menu</h2>
      <ul>
        {menuData.map((tea) => (
          <TeaItem key={tea.id} tea={tea} onRemove={() => removeFromMenu(tea.id)} />
        ))}
      </ul>
    </div>
  );
};

export default TeaMenu;
