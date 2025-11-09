
export const recipeCsvData = `Item name,braised beef used (g),Braised Chicken(g),Braised Pork(g),Egg(count),Rice(g),Ramen (count),Rice Noodles(g),chicken thigh (pcs),Chicken Wings (pcs),flour (g),Pickle Cabbage,Green Onion,Cilantro,White onion,Peas(g),Carrot(g),Boychoy(g),Tapioca Starch
Beef Tossed Ramen,140,,,0.5,,1,,,,,50,20,20,,,,50,
Beef Ramen,140,,,0.5,,1,,,,,,20,20,,,,,
Beef Fried Rice,100,,,1,350,,,,,,,20,,20,10,10,,
Pork Fried Rice,,,100,1,350,,,,,,,20,,20,10,10,,
Chicken Fried Rice,,100,,1,350,,,,,,,20,,20,10,10,,
Fried Wings,,,,,,,,,8,50,,,,,,,,
Pork Tossed Ramen,,,140,0.5,,1,,,,,50,20,20,,,,,
Pork Ramen,,,140,0.5,,1,,,,,,20,20,,,,50,
Chicken Tossed Ramen,,140,,0.5,,1,,,,,50,20,20,,,,,
Chicken Ramen,,140,,0.5,,1,,,,,,20,20,,,,50,
Chicken Cutlet,,,,0.5,,,,1,,,,,,,,,,60
Beef Tossed Rice Noodles,140,,,0.5,,,300,,,,50,20,20,,,,,
Pork Tossed Rice Noodles,,,140,0.5,,,300,,,,50,20,20,,,,,
Chicken Tossed Rice Noodles,,140,,0.5,,,300,,,,50,20,20,,,,,
Beef Rice Noodle Soup,140,,,0.5,,,300,,,,,20,20,,,,50,
Pork Rice Noodle Soup,,,140,0.5,,,300,,,,,20,20,,,,50,
Chicken Rice Noodle Soup,,140,,0.5,,,300,,,,,20,20,,,,50,`;

export const shipmentCsvData = `Ingredient,Quantity per shipment,Unit of shipment,Number of shipments,frequency
Beef,40,lbs,3,weekly
Chicken,40,lbs,2,weekly
Pork,30,lbs,2,weekly
Ramen,50,rolls,15,biweekly
Rice Noodles,50,lbs,2,monthly
Flour,50,lbs,2,monthly
Tapioca Starch,25,lbs,1,monthly
Rice,50,lbs,2,biweekly
Green Onion,20,lbs,2,weekly
White onion,80,whole onion,4,weekly
Cilantro,5,lbs,2,weekly
Egg,120,eggs,5,weekly
Peas,20,lbs,3,weekly
Carrot,20,lbs,3,weekly
Bokchoy,25,lbs,5,weekly
Chicken Wings,380,pieces,10,weekly
Pickle Cabbage,10,lbs,2,weekly`;


export const initialSalesData: { [month: string]: string } = {
    "January": `Item name,Sales
Beef Tossed Ramen,120
Beef Ramen,150
Beef Fried Rice,180
Pork Fried Rice,90
Chicken Fried Rice,220
Fried Wings,300
Pork Tossed Ramen,85
Pork Ramen,95
Chicken Tossed Ramen,110
Chicken Ramen,130
Chicken Cutlet,160
Beef Tossed Rice Noodles,70
Pork Tossed Rice Noodles,65
Chicken Tossed Rice Noodles,80
Beef Rice Noodle Soup,75
Pork Rice Noodle Soup,70
Chicken Rice Noodle Soup,90`,
    "February": `Item name,Sales
Beef Tossed Ramen,135
Beef Ramen,160
Beef Fried Rice,195
Pork Fried Rice,100
Chicken Fried Rice,240
Fried Wings,320
Pork Tossed Ramen,90
Pork Ramen,110
Chicken Tossed Ramen,125
Chicken Ramen,140
Chicken Cutlet,170
Beef Tossed Rice Noodles,80
Pork Tossed Rice Noodles,75
Chicken Tossed Rice Noodles,95
Beef Rice Noodle Soup,85
Pork Rice Noodle Soup,80
Chicken Rice Noodle Soup,100`,
    "March": `Item name,Sales
Beef Tossed Ramen,150
Beef Ramen,180
Beef Fried Rice,210
Pork Fried Rice,115
Chicken Fried Rice,255
Fried Wings,350
Pork Tossed Ramen,100
Pork Ramen,120
Chicken Tossed Ramen,140
Chicken Ramen,150
Chicken Cutlet,190
Beef Tossed Rice Noodles,90
Pork Tossed Rice Noodles,85
Chicken Tossed Rice Noodles,110
Beef Rice Noodle Soup,100
Pork Rice Noodle Soup,90
Chicken Rice Noodle Soup,115`
};

// Data for the new Monthly Sales Chart
const januarySalesByItemCsv = `Item Name,Count,Amount
Beef Tossed Ramen,280,"$3,990"
Beef Ramen,240,"$3,500"
Lunch Special,180,"$2,600"
Chicken Rice Noodle Soup,150,"$2,150"
Chicken Ramen,110,"$1,640"
Mai Special Fried Chicken(8),130,"$1,330"
Fried Pork Dumplings(10),70,"$630"`;

const januarySalesByCategoryCsv = `Category,Count,Amount
Ramen,550,"$8000"
Appetizer,700,"$4,200"
Fried Chicken,400,"$4,000"
Fried Rice,110,"$1,500"
Drink,1800,"$2,100"`;

const januarySalesByGroupCsv = `Group,Count,Amount
All Day Menu,"5,100","$38,000"
Lunch Menu,180,"$2,600"`;

const februarySalesByItemCsv = `Item Name,Count,Amount
Beef Tossed Ramen,300,"$4,200"
Beef Ramen,260,"$3,700"
Lunch Special,200,"$2,800"
Chicken Rice Noodle Soup,160,"$2,300"
Chicken Ramen,120,"$1,750"
Mai Special Fried Chicken(8),140,"$1,450"
Fried Pork Dumplings(10),80,"$700"`;

const februarySalesByCategoryCsv = `Category,Count,Amount
Ramen,600,"$8,800"
Appetizer,800,"$4,600"
Fried Chicken,420,"$4,300"
Fried Rice,120,"$1,650"
Drink,1900,"$2,250"`;

const februarySalesByGroupCsv = `Group,Count,Amount
All Day Menu,"5,400","$40,000"
Lunch Menu,200,"$2,800"`;

const marchSalesByItemCsv = `Item Name,Count,Amount
Beef Tossed Ramen,321,"$4,564.29"
Beef Ramen,273,"$3,986.72"
Lunch Special,213,"$2,994.75"
Chicken Rice Noodle Soup,173,"$2,486.42"
Chicken Ramen,127,"$1,888.36"
Beef Tossed Rice Noodle,112,"$1,798.91"
Pork Tossed Ramen,141,"$1,907.81"
Chicken Tossed Ramen,110,"$1,541.79"
House Ramen,84,"$1,428.07"
Mai Special Fried Chicken(8),152,"$1,531.62"`;

const marchSalesByCategoryCsv = `Category,Count,Amount
Lunch Special,213,"$2,994.75"
Milk Tea,256,"$1,120.75"
Fried Rice,130,"$1,748.27"
Appetizer,901,"$5,012.23"
Fried Chicken,452,"$4,676.16"
Ramen,618,"$9,153.54"
Tossed Ramen,581,"$8,147.01"
Tossed Rice Noodle,252,"$3,778.39"
Rice Noodle,315,"$4,621.24"
Drink,"2,039","$2,445.01"`;

const marchSalesByGroupCsv = `Group,Count,Amount
All Day Menu,"5,877","$43,088.72"
Lunch Menu,213,"$2,994.75"
Gift Card,1,$5.99
Open Food,3,$5.75`;


export const initialSalesDetails: { [month: string]: { byItem: string, byCategory: string, byGroup: string } } = {
    "January": { byItem: januarySalesByItemCsv, byCategory: januarySalesByCategoryCsv, byGroup: januarySalesByGroupCsv },
    "February": { byItem: februarySalesByItemCsv, byCategory: februarySalesByCategoryCsv, byGroup: februarySalesByGroupCsv },
    "March": { byItem: marchSalesByItemCsv, byCategory: marchSalesByCategoryCsv, byGroup: marchSalesByGroupCsv },
};