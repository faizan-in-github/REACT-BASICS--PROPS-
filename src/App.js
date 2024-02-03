import React from 'react';
import Card from "./components/cards"

function App() {
  return (
    <div>
       <Card 
    name="Idli"
    description="Idli: Steamed Delight from South India Idli, a beloved South Indian delicacy, stands out as a versatile and nutritious dish that has won hearts across the Indian subcontinent and beyond. This simple yet satisfying creation is a staple in many households, restaurants, and street food stalls."
    src="https://th.bing.com/th/id/OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8?w=283&h=189&c=7&r=0&o=5&pid=1.7" />
    <Card 
    name="PHO"
    description="Pho: Vietnamese Noodle Soup Elegance Pho, pronounced fuh, is a Vietnamese culinary masterpiece ."
    src="https://th.bing.com/th?id=OSK.fca6a60db4212bb14f6312c6a934cfd3&w=197&h=118&c=7&rs=2&qlt=80&o=6&cdv=1&pid=16.1" />
    </div>
   
  );
  
  
}

export default App;
