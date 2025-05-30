document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("current-date");
  const today = new Date();
  dateElement.textContent = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  const beerData = [
  {
    category: "India Pale Ale & Imperial IPA",
    items: [
      { name: "Lakefront IPA", details: "WI, 6.6%", price: "$4.50" },
      { name: "Raised Grain Naked 3some Hazy", details: "WI, 7.9%", price: "$5.50" },
      { name: "Bells Two Hearted", details: "MI, 7%", price: "$5.50" },
      { name: "Eagle Park Set List IPA", details: "WI, 5.6%", price: "$6.00" },
      { name: "Founders Mortal Bloom Hazy IPA", details: "6.2%", price: "$6.00" },
      { name: "New Belgium Voodoo Ranger", details: "CO, 7%, Draught/BTL", price: "$5.00" },
      { name: "Badger St Mallard IPA", details: "WI, 7%", price: "$6.75" },
      { name: "Toppling Goliath Cyber Sue", details: "IA, 7.2%", price: "$6.00" },
      { name: "Lake Louie Kiss on the Lips IPA", details: "WI, 6.5%", price: "$5.25" },
      { name: "MKE Day Imp IPA", details: "WI, 9.5%", price: "$6.00" },
      { name: "New Belgium Voodoo Ranger 1985", details: "CO, 6.7%", price: "$6.25" },
      { name: "Lakefront Hazy Rabbit", details: "WI, 6.6%", price: "$5.00" },
      { name: "Half Acre Beer Hates Astronauts IPA", details: "7.8%", price: "$6.75" },
      { name: "Saugatuck Hazy Duck IPA", details: "7.5%", price: "$6.00" },
      { name: "Badger St. Caddylland IPA", details: "WI, 4.4%", price: "$6.00" },
      { name: "Dogfish Head 90 Minute IPA", details: "DE, 9.0%, BTL", price: "$6.50" },
      { name: "Stone IPA", details: "CA, 6.9%, BTL", price: "$5.50" },
      { name: "Eagle Park Rectifier", details: "WI, 7.8%, Can", price: "$6.00" },
      { name: "New Belgium Voodoo Ranger", details: "CO, 7%, BTL", price: "$5.00" },
      { name: "Founder All Day IPA", details: "MI, 4.7%, BTL", price: "$5.00" }
    ]
  },
  {
    category: "Fruit Ale, Cider, Shandy & Sour",
    items: [
      { name: "Angry Orchard", details: "NY, 5% GF", price: "$5.25" },
      { name: "New Glarus Raspberry Tart", details: "WI, 4%", price: "$6.00" },
      { name: "Summer Shandy", details: "WI, 4.2%, Draught", price: "$5.00" },
      { name: "Ciderboys Peach County", details: "WI, 5%", price: "$5.00" },
      { name: "Ciderboys Strawberry Magic", details: "WI, 5%", price: "$5.00" },
      { name: "Southern Tier Blackberry Lemonade Shandy", details: "NY", price: "$6.00" },
      { name: "Founders All Day Shandy", details: "MI, 3.5%", price: "$5.50" },
      { name: "Schilling Local Legend", details: "WA, 5.2%, Can", price: "$5.00" },
      { name: "Paulaner Grapefruit Radler", details: "Germany, 2.5%, Can", price: "$5.50" }
    ]
  },
  {
    category: "Scotch Ale",
    items: [
      { name: "Founders Dirty Bastard", details: "MI, 8.5%, BTL", price: "$5.00" }
    ]
  },
  {
    category: "Pilsner",
    items: [
      { name: "Miller Lite", details: "WI, 4.2%, Draught/BTL", price: "$3.75" },
      { name: "3 Sheeps Pilsner", details: "WI, 5.3%", price: "$4.25" }
    ]
  },
  {
    category: "Golden Ale or Blonde Ales",
    items: [
      { name: "Kona Big Wave Golden Ale", details: "HI, 4.4%", price: "$4.50" },
      { name: "New Belgium Fat Tire", details: "CO, 5.2%", price: "$5.00" },
      { name: "Third Space Marquette Golden Ale", details: "WI, 4.9%", price: "$5.00" }
    ]
  },
  {
  category: "Lager",
  items: [
    { name: "Bud Light", details: "MO, 4.2%, Draught/Btl", price: "$3.75" },
    { name: "Coors Light", details: "CO, 4.2%, Draught/Btl", price: "$3.75" },
    { name: "Miller High Life", details: "WI, 5%, Draught/Btl", price: "$3.75" },
    { name: "Pabst", details: "CA, 4.7%, Draught/Btl", price: "$3.75" },
    { name: "Michelob Ultra", details: "MO, 4.2%, Draught/Can", price: "$4.25" },
    { name: "Modelo", details: "MX, 4.5% Draught/BTL", price: "$5.00" },
    { name: "Raised Grain Guitar City", details: "WI, 4.8%", price: "$4.00" },
    { name: "Montucky Cold Snack", details: "MT, 4.1% Can", price: "$4.00" },
    { name: "Busch Light", details: "MO, 4.1% BTL", price: "$3.75" },
    { name: "Budweiser", details: "MO, 5.0% BTL", price: "$3.75" },
    { name: "MGD", details: "WI, 4.2% BTL", price: "$3.75" },
    { name: "Miller 64", details: "WI, 2.8% BTL", price: "$3.75" },
    { name: "Old Style", details: "CA, 4.6% BTL", price: "$3.75" },
    { name: "Schlitz", details: "CA, 4.6% BTL", price: "$3.75" },
    { name: "Bud Light Lime", details: "MO, 4.2% BTL", price: "$3.75" },
    { name: "Rolling Rock", details: "MO, 4.4% Can/BTL", price: "$3.75" },
    { name: "Corona Premier", details: "MX, 4.0% BTL", price: "$4.00" },
    { name: "Corona Extra", details: "MX, 4.6% BTL", price: "$4.00" },
    { name: "Heineken", details: "Netherlands, 5.0% BTL", price: "$5.00" },
    { name: "Stella Artois", details: "Belgium, 5% BTL", price: "$5.00" }
  ]
},
{
  category: "Cream Ale",
  items: [
    { name: "New Glarus Spotted Cow", details: "WI, 4.8%, Draught/BTL", price: "$5.50" },
    { name: "Milwaukee Outboard", details: "WI, 5%, Can", price: "$5.00" },
    { name: "Kentucky Vanilla Barrel", details: "KY, 5.5%, BTL", price: "$5.00" },
    { name: "Kentucky Tangerine Cream", details: "KY, 5.5%, BTL", price: "$5.00" }
  ]
},
{
  category: "Pale Ale",
  items: [
    { name: "Third Space Happy Place", details: "WI, 5.3%", price: "$5.00" },
    { name: "Topping Goliath Pseudo Sue", details: "IA, 5.8%", price: "$6.00" },
    { name: "Dogfish Head Grateful Dead Juciy", details: "DE, 5.3%", price: "$6.00" },
    { name: "3 Floyds Zombie Dust", details: "6.5%, Can", price: "$6.00" },
    { name: "New Glarus Moon Man", details: "WI, 5.0%, BTL", price: "$5.00" },
    { name: "Sierra Nevada Pale Ale", details: "CA, 5.6%, BTL", price: "$5.00" }
  ]
},
{
  category: "Strong Ale",
  items: [
    { name: "Southern Tier Cherry Pie", details: "NY, 8.6%", price: "$6.75" }
  ]
},
{
  category: "Porter & Stout",
  items: [
    { name: "Guinness (Nitro)", details: "Ireland, 4.2%", price: "$6.00" },
    { name: "3 Sheeps 15-2 Stout", details: "WI, 7.2%", price: "$5.00" },
    { name: "Great Lakes Edmund Fitzgerald Porter", details: "OH, 6%", price: "$5.00" },
    { name: "Hinterland Sticky Stacks IMP Stout", details: "WI, 10.7%", price: "$8.50" },
    { name: "Young Blood Husky Hustle Stout", details: "WI, 8.5%", price: "$8.00" },
    { name: "Southern Tier Carmel Cookie Ch Bar Imp Stout", details: "10%", price: "$6.75" },
    { name: "Founders Porter", details: "MI, 6.5%, BTL", price: "$5.00" }
  ]
},
{
  category: "Wheat Ale",
  items: [
    { name: "Hacker Pschorr Hefe-Weisse", details: "Germany, 5.5%", price: "$5.50" },
    { name: "Golden Road Mango Cart", details: "CA, 4%", price: "$4.50" },
    { name: "Dusterbeck Bees Be Crazy Hefeweizen", details: "WI, 6%", price: "$5.00" },
    { name: "Sam Adams Summer", details: "MA, 5.3%", price: "$5.25" },
    { name: "Bells Oberon", details: "MI, 5.8%", price: "$5.00" },
    { name: "Hinterland Cherry", details: "WI, 5.4%, Can", price: "$5.00" }
  ]
},
{
  category: "Gluten Reduced",
  items: [
    { name: "Angry Orchard", details: "NY, 5%, GF", price: "$5.25" },
    { name: "Lakefront New Grist", details: "WI, Can", price: "$5.00" }
  ]
},
{
  category: "Witbier",
  items: [
    { name: "Blue Moon", details: "CO, 5.4%", price: "$5.00" },
    { name: "Eagle Park Blues Breaker", details: "WI, 5.2%", price: "$5.00" }
  ]
},
{
  category: "English/American Brown Ale",
  items: [
    { name: "New Castle", details: "UK, 4.7%, BTL", price: "$5.00" }
  ]
},
{
  category: "Vienna Style & Amber Ales",
  items: [
    { name: "Lakefront Riverwest Stein", details: "WI, 5.6%", price: "$4.50" },
    { name: "Sam Adams Boston Lager", details: "MA, 5%", price: "$5.25" },
    { name: "Leines Barrelman Ale", details: "WI, 4.5%", price: "$5.00" },
    { name: "Milwaukee Louie's Demise", details: "WI 4.8% Can", price: "$5.00" }
  ]
},
{
  category: "Non-Alcoholic Beers",
  items: [
    { name: "Sam Adams Just the Haze", details: "MA, 0.5% Can", price: "$4.50" },
    { name: "Lakefront Riverwest Stein", details: "WI, 0.5% Can", price: "$4.50" },
    { name: "Lakefront Extended Play Pale Ale", details: "WI, 0.5% Can", price: "$4.50" },
    { name: "Heineken 0.0", details: "Netherlands, 0% BTL", price: "$4.50" },
    { name: "Michelob Ultra Zero", details: "Can", price: "$4.50" }
  ]
},
{
  category: "Malt Beverages",
  items: [
    { name: "Eagle Park Ekto Kooler", details: "WI, 5%", price: "$6.25" },
    { name: "Twisted Tea", details: "OH, 5.0%", price: "$5.00" },
    { name: "Eagle Park Cabo Cooler", details: "WI, 5.0%, Can", price: "$5.00" },
    { name: "Suncruiser Lemonade Ice Tea Vodka", details: "MA, 4.5%", price: "$7.00" },
    { name: "Surfside Lemonade Vodka", details: "4.5%", price: "$7.00" },
    { name: "Sunny D Vodka Seltzer", details: "4.5%, Can", price: "$7.00" },
    { name: "High Noon Black Cherry", details: "TN, 4.5%, Can", price: "$7.00" },
    { name: "High Noon Peach", details: "TN, 4.5%, Can", price: "$7.00" },
    { name: "High Noon Pineapple", details: "TN, 4.5%, Can", price: "$7.00" },
    { name: "Nutrl Orange", details: "4.5%, Can", price: "$7.00" },
    { name: "Nutrl Black Cherry", details: "4.5%, Can", price: "$7.00" },
    { name: "Nutrl Pineapple", details: "4.5%, Can", price: "$7.00" },
    { name: "Carbliss Lemon Lime", details: "WI, 5%, Can", price: "$7.00" },
    { name: "Carbliss Cranberry", details: "WI, 5%, Can", price: "$7.00" },
    { name: "Carbliss Strawberry Margarita", details: "WI, 5%, Can", price: "$7.00" },
    { name: "Carbliss Black Raspberry", details: "WI, 5%, Can", price: "$7.00" },
    { name: "Carbliss Pineapple", details: "WI, 5%, Can", price: "$7.00" },
    { name: "Carbliss Peach", details: "WI, 5%, Can", price: "$7.00" },
    { name: "Carbliss Mango", details: "WI, 5%, Can", price: "$8.00" },
    { name: "Mikes Lemonade", details: "WI, 5.0%, Can", price: "$5.50" },
    { name: "Mikes Black Cherry", details: "WI, 5.0%, Can", price: "$5.50" },
    { name: "White Claw Hard Seltzer Black Cherry", details: "IL, 5.0%", price: "$5.50" },
    { name: "White Claw Hard Seltzer Raspberry", details: "IL, 5.0%", price: "$5.50" },
    { name: "White Claw Hard Seltzer Mango", details: "IL, 5.0%, Can", price: "$5.50" },
    { name: "White Claw Hard Seltzer Lime", details: "IL, 5.0%, Can", price: "$5.50" },
    { name: "White Claw Hard Seltzer Grape", details: "IL, 5.0%, Can", price: "$6.50" },
    { name: "Cazadores Paloma", details: "5.9%, Can Gluten Free", price: "$7.50" }
  ]
},
{
  category: "Beers Coming Soon on Tap",
  items: [
    { name: "3 Sheeps Maibock", details: "", price: "" },
    { name: "Old Nation M-43 Orange Creamsicle IPA", details: "", price: "" }, 
    { name: "3 Sheeps Sowre", details: "", price: "" },
    { name: "Central Waters Nice Things Hazy IPA", details: "", price: "" },
    { name: "Eagle Park/1840 Brewery Joint IPA", details: "", price: "" },
    { name: "Corona Premier", details: "", price: "" }
  ]
}
];

  const container = document.getElementById("beer-categories");
  beerData.forEach(cat => {
    const section = document.createElement("section");
    section.className = "beer-category";
    section.id = generateId(cat.category);

    const heading = document.createElement("h2");
    heading.textContent = cat.category;
    section.appendChild(heading);

    cat.items.forEach(beer => {
      const item = document.createElement("div");
      item.className = "beer-item";

      const info = document.createElement("div");
      info.className = "beer-info";
      info.innerHTML = `<strong>${beer.name}</strong><span class="tags">${beer.details}</span>`;

      const price = document.createElement("div");
      price.className = "beer-price";
      price.textContent = beer.price;

      item.appendChild(info);
      item.appendChild(price);
      section.appendChild(item);
    });

    container.appendChild(section);
  });

    function generateId(category) {
        return category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }
});
