var InterviewMath = {};

InterviewMath.Data = {};

InterviewMath.Data.Questions = [
    {"question":"How many BMW dealerships are in the United States?", "tag":"ASSUMPTIONS", "src":"int-math"},
    {"question":"How many airports are in the United States?", "tag":"ASSUMPTIONS", "src":"int-math"},
    {"question":"What is the market size of disposable diapers in China?", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"What is the market size of women’s rain boots in Seattle?", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"What is the market size of toothbrushes in the United States?", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"What is the market size of real Christmas (Xmas) trees in the United States?", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"What is the market size of men’s haircuts in New York City?", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"What is the market size of men’s dress socks in the United States?", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"What is the market size of smartphone cases in the United States?", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"Estimate the total industry sales of lipstick in the U.S.", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"How many cars are in Los Angeles?", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"How many TV ads are shown in the U.S. each day?", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"Estimate the annual sales for Starbucks’ retail stores in the United States.", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"Estimate the annual sales for Subway restaurants in the United States.", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"Estimate the summer sales of Disneyland tickets in the United States.", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"Estimate the annual sales of NFL tickets in the United States.", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"Estimate the annual sales of Pillow Pets in the United States.", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"How much money does Electronic Arts’ make from selling the popular Madden NFL football game?", "tag":"ESTIMATION", "src":"int-math"},
    {"question":"A running shoe manufacturer sells shoes for $100 a pair. To produce each pair, the company spends $10 in materials and $5 in labor. They have $1 million dollars in monthly operating costs. If they sell 30,000 pairs a month, what is their monthly profit?", "tag":"PROFITABILITY", "src":"int-math"},
    {"question":"A manufacturer sells a specialty light bulb for $8. Material cost is $3.50. Labor cost is $2.50. Factory rent is $10,000 per month. Utilities and other operational costs are $5,000 per month. The production volume is 300,000 units per month. What is the profit per month?", "tag":"PROFITABILITY", "src":"int-math"},
    {"question":"A company sells household garden hoses for $14. Materials for each hose cost $5.50. Variable labor costs are $3.50 a hose and fixed labor costs are $2,000 a month. Factory rent is $9,000 a month. Other operational costs are $6,000 a month. The production volume is 415,000 units a month. What is their monthly profit?", "tag":"PROFITABILITY", "src":"int-math"},
    {"question":"A firm sells textbooks that are used by students across the country. They are currently selling their textbooks for $200. The cost of each book to the seller is $30. The office rent costs $10,000 a month. Other operational costs are $4,000 a month. They are selling at a volume of 3,000 a month. What is their monthly profit?", "tag":"PROFITABILITY", "src":"int-math"},
    {"question":"A Michigan company manufactures denim jeans for toddlers. Their jeans sell for $15 in local stores and $13 online on the manufacturer’s website. 20% of their sales come from the local stores and 80% of their sales come from the website. Their monthly selling volume is 10,000 a month. Each pair of jeans costs the manufacturer $3 in material costs and $4 in labor costs. Their fixed costs to run the business are $8,500 a month for rent and $3,000 in other operational costs.", "tag":"PROFITABILITY", "src":"int-math"},
    {"question":"A division of a shipping company manufactures polystyrene packing peanuts. The company uses some of the packing peanuts for its own shipping, but sells the rest. Each 20 cubic foot bag of packing peanuts costs the company $14 in material costs and $4 in variable labor costs. They sell each bag to customers for $27. Their monthly fixed costs include $6,000 for factory rent, $1,500 for operational costs, and $4,000 for administrative salaries. On average, the company sells 9,000 bags of packing peanuts a month. What is the company’s monthly profit?", "tag":"PROFITABILITY", "src":"int-math"},
    {"question":"A New Jersey company manufactures unique, trendy hats for young adults. They sell each hat for $30 online and in their own retail stores. Each hat costs the company $7 in material costs and $5 in labor costs. The monthly fixed costs include $11,000 for rent and $5,000 in other operational costs. The company sells 12,000 hats a month. What is the company’s monthly profit?", "tag":"PROFITABILITY", "src":"int-math"},
    {"question":"A Washington company sells custom pillowcases. Each pillowcase sells for $25 online. To produce each pillowcase, the company must spend $4.50 on material costs and $7 on labor costs. The company also incurs $2,500 a month on rent and $4,200 on other operating costs like equipment upkeep and advertising. If the company sells 3,000 units a month, what is their monthly profit?", "tag":"PROFITABILITY", "src":"int-math"},
    {"question":"A new company has started producing reusable water bottles. They are selling each bottle for $22 in stores and online. It costs them $7 in material costs and $5 in labor costs to make each bottle. They also have monthly fixed costs of $5,000 for factory rent, $1,500 for machine upkeep, and $3,000 for other operational costs. In month one, they sold 3,500 water bottles. They expect sales to increase by 10% every month. a. What is their monthly profit in month one? b. What is their monthly profit in month five?", "tag":"PROFITABILITY", "src":"int-math"},
    {"question":"A textile company sells towels in bulk to hotels. Each towel costs the company $4 in material costs and $2 in labor costs. The company also incurs monthly costs of $7,000 for rent and $5,000 for other operating costs. Since the towels are sold to hotels, the company sells bundles of 200 towels. Each bundle costs $1,600 and the company sells 400 bundles a month. What is their monthly profit?", "tag":"PROFITABILITY", "src":"int-math"},
    {"question":"A running shoe manufacturer sells shoes for $100 a pair. To produce each pair, the company spends $10 in materials and $5 in labor. They have $1 million dollars in monthly operating costs. How many running shoes does the company need to sell each month to breakeven?", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"A manufacturer sells a specialty light bulb for $8. Material cost is $3.50. Labor cost is $2.50. Factory rent is $10,000 per month. Utilities and other operational costs are $5,000 per month. How many light bulbs would they have to sell to make $4M in monthly profit?", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"A company sells household garden hoses for $14. Materials for each hose cost $5.50. Variable labor costs are $3.50 a hose and fixed labor costs are $2,000 a month. Factory rent is $9,000 a month. Other operational costs are $6,000 a month. How many garden hoses does the company need to sell to make $4M in monthly profits?", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"A firm sells textbooks that are used by students across the country. They are currently selling their textbooks for $200. The cost of each book to the seller is $30. The rent costs $10,000 a month. Other operational costs are $4,000 a month. If the firm wants to make $700K in monthly profit, how many textbooks would they need to sell?", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"A Michigan company manufactures denim jeans for toddlers. Their jeans sell for $15 in local stores and $13 online on the manufacturer’s website. 20% of their sales come from the local stores; 80% of their sales come from the website. Each pair of jeans costs the manufacturer $3 in material costs and $4 in labor costs. Their fixed costs are $8,500 a month for rent and $3,000 in other operational costs. How many jeans does the company need to sell to make a monthly profit of at least $75,000?", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"A division of a shipping company manufactures polystyrene packing peanuts. The company uses some of the packing peanuts for its own shipping and sells the rest. Each 20 cubic foot bag of packing peanuts costs the company $14 in material costs and $4 in variable labor costs. They sell each bag to customers for $27. Their monthly fixed costs include $6,000 for factory rent, $1,500 for operational costs, and $4,000 for administrative salaries. How many bags would they have to sell if administrative salaries dropped to $2,000 and they wanted to make at least $100,000 in monthly profit?", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"A New Jersey company manufactures unique, trendy hats for young adults. They sell each hat for $30 online and in their own retail stores. Each hat costs the company $7 in material costs and $5 in labor costs. The monthly fixed costs include $11,000 for rent and $5,000 in other operational costs. How many hats does the company have to sell to make a monthly profit of at least $250,000?", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"A Washington company sells custom pillowcases. Each pillowcase sells for $25 online. To produce each pillowcase, the company must spend $4.50 on material costs and $7 on labor costs. The company also incurs $2,500 a month on rent and $4,200 on other operating costs like equipment upkeep and advertising. How many pillowcases does the company need to sell to make at least $60,000 in monthly profit?", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"A new company produces reusable water bottles. They are selling each bottle for $22 in stores and online. It costs them $3 in material costs and $2 in labor costs to make each bottle. They also have monthly fixed costs of $5,000 for factory rent, $1,500 for machine upkeep, and $3,000 for other operational costs. How many water bottles do they have to make a monthly profit of at least $100,000?", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"A textile company sells towels in bulk to hotels. Each towel costs the company $4 in material costs and $2 in labor costs. The company also incurs monthly costs of $7,000 for rent and $5,000 for other operating costs. Since the towels are sold to hotels, the company sells bundles of 200 towels. Each bundle is priced at $1,600. How many bundles does the company need to sell to make a monthly profit of at least $250,000?", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"Domino’s Pizza is launching a new seasonal pizza, and the marketing team wants to promote this new pizza during the Super Bowl with four 30 second spots. Your boss asks you, “What ad conversion rate do we need to make the Super Bowl ad to pay off?", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"After reviewing your calculations from Domino’s Pizza I with your colleagues, the finance team suggests that you incorporate ad fatigue your estimates. Ad fatigue is when an ad is shown repeatedly, the conversion rate drops.", "tag":"BREAKEVEN", "src":"int-math"},
    {"question":"Google just launched a new Nexus phone, and it retails for $649. Should Google reduce the price by $50?", "tag":"PRICE ELASTICITY", "src":"int-math"},
    {"question":"Should Disney recommend that movie theaters increase Star Wars 7 ticket prices from $8 to $9?", "tag":"PRICE ELASTICITY", "src":"int-math"},
    {"question":"Altria, the parent company of Marlboro cigarettes, is considering a Marlboro price increase from $8 to $10 per pack. Should Altria do it?", "tag":"PRICE ELASTICITY", "src":"int-math"},
    {"question":"Considering the previous question about Marlboro cigarettes, what price will maximize Altria’s sales?", "tag":"PRICE ELASTICITY", "src":"int-math"},
    {"question":"Starbucks is considering a latte price increase from $5 to $6. Should Starbucks do it?", "tag":"PRICE ELASTICITY", "src":"int-math"},
    {"question":"The price of one-way ticket from Seattle to New York is $400. Should JetBlue raise the price to $450?", "tag":"PRICE ELASTICITY", "src":"int-math"},
    {"question":"Would you advise Sam Adams to raise its prices by 10%", "tag":"PRICE ELASTICITY", "src":"int-math"},
    {"question":"What is the lifetime value of a Starbucks customer?", "tag":"LIFETIME VALUE", "src":"int-math"},
    {"question":"What is AT&T’s expected profit when a customer buys a new iPhone, with a two year contract?", "tag":"LIFETIME VALUE", "src":"int-math"},
    {"question":"What is the customer lifetime value of an AMEX card holder?", "tag":"LIFETIME VALUE", "src":"int-math"},
    {"question":"American Express is thinking of dropping its $50 annual fee. Should they do it?", "tag":"LIFETIME VALUE", "src":"int-math"},
    {"question":"What is the customer lifetime value for Crest Toothpaste?", "tag":"LIFETIME VALUE", "src":"int-math"},
    {"question":"What is the customer lifetime value for New York Times’ website?", "tag":"LIFETIME VALUE", "src":"int-math"}
];

InterviewMath.Data.Passed = [];

InterviewMath.Data.Tips = [];
