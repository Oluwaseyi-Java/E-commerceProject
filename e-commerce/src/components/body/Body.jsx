import React from 'react'
import Categories from './Categories'
import Discount from './Discount'
import More from './More'
import Newsletter from './Newsletter'
import Overview from './Overview'
import ProductTypes from './ProductTypes'
import Services from './Services'


// { Fade, Handler }
// Fade = { Fade } Handler = { Handler }
const Body = () => {


  /**
   * 
   * 
  const [categories, setCategories] = useState(allCategories);
  const [shopItems, setShopItems] = useState(ShopData.products);

  useEffect(() => {
    setCategories(allCategories);
    setShopItems(ShopData.products)
},[])


   */
  return (
    <div>


      <Services />
      <Categories />
      {/** 
        <Routes>
        <Route  path='/all' element={<Main items={shopItems} />} />
        <Route path={`/:category`} element={<Category />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

       * **/}
      {/** 
      /
       * **/}
      <Overview />
      <ProductTypes />
      <Discount />
      <More />
      {/** 
 /all

        * **/}
      <Newsletter />

    </div>
  )
}

export default Body