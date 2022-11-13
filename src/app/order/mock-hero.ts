import { Hero } from "./model";


export const HEROES: Hero[] = [
  
  { id: 1 , nom : "batt",title : "Performance", subtitle : "Choose your batterie",
   body : [{type: '2.5 kWh - 100 km', price: '+ 0 TND'},{type: '5 kWh - 150 km', price: '+ 3000 TND'},{type: '7.5 kWh - 200 km', price: '+ 6000 TND'}]},
  { id: 1 , title : "Cargo space",subtitle : "Exterior", body : [{type: 'standard', price: '+ 0 TND'},{type: 'Pickup', price: '- 500 TND'}]},
  { id: 1 , title : "Cockpit" ,subtitle : "Doors", body : [{type: 'Doors', price: '+ 0 TND'},{type: 'No Doors', price: '- 500 TND'}]},
  { id: 1 , title : "Additional",subtitle : "Connectivity", body : [{type: 'Mobile application', price: '+ 0 TND'},{type: 'fleet management', price: 'cooming soon'}]},

 /* { id: 2,nom : "batt", type: '5 kWh - 150 km', price: '+ 3000 TND'},
  { id: 2, nom : "batt",type: '7.5 kWh - 200 km',price: '+ 6000 TND' },
  { id: 1 , nom : "cargo",type: 'Pickup', price: '+ 0 TND'},
  { id: 2,nom : "cargo", type: 'Standard', price: '+ 3000 TND'},
  { id: 2, nom : "cargo",type: 'Side openers',price: '+ 6000 TND' },*/
  
];