const apple = 15.678;
const mango = 123.965;
const banan = 90.2345;
const sumAllFruits = apple+mango+banan;
const discount = Math.ceil(Math.random()*(100-1)+1)


document.write(
    `<p>Максимальне значення: ${Math.max(apple, mango, banan)}</p>
     <p>Мінімальне значення: ${Math.min(apple, mango, banan)}</p>
     <p>Сума всіх товарів: ${sumAllFruits}</p>
     <p>Сума всіх товарів без копійок: ${Math.floor(apple)+Math.floor(mango)+Math.floor(banan)}</p>
     <p>Сума всіх товарів округлена до сотень: ${Math.round(sumAllFruits/100)*100}</p>
     <p>Перевірка на парне непарне число: ${Math.floor(sumAllFruits)%2==0}</p>
     <p>Сума решти при оплаті 500: ${500-sumAllFruits}</p>
     <p>Середнє значення цін, округлене до другого знаку після коми: ${(sumAllFruits/3).toFixed(2)}</p>
     <p>Ваша знижка: ${discount} %</p>
     <p>До оплати з знижкою: ${(sumAllFruits-(sumAllFruits*discount)/100).toFixed(2)}</p>
     <p>Прибуток: ${((sumAllFruits/2)-(sumAllFruits*discount)/100)}</p>`)