import { createContext, useContext, useEffect, useState } from "react";
import { ShopData } from "../UIDatas";


const AppContext = createContext();



const allCategories = [...new Set(ShopData.products.map((product) => product.category))]


const AppProvider = ({ children }) => {
    const [shopItems, setShopItems] = useState(ShopData.products);
    const [categories] = useState(allCategories);
    const [isModal, setIsModal] = useState(false)
    const [isOpen,setIsOpen]=useState(true)
    const [modalContent, setModalContent] = useState({
        name: "",
        price: "",
        description: "",
        imgUrl: ""
    })


    useEffect(() => {
        setShopItems(ShopData.products)
    }, [])

    const checkIfIsOpen = (value) => {
        if ((value) === "cart" || "all") {
            setIsOpen(false)
        }
    }
    const checkModal = (name, price, description, imgUrl) => {
        setModalContent({
            ...modalContent,
            name: name,
            price: price,
            description: description,
            imgUrl: imgUrl
        })
        setIsModal(true)
    }
    const closeModal = (value) => {
        setIsModal(value)
    }

    return <AppContext.Provider value={{
        shopItems, categories, isModal, modalContent, closeModal, checkModal,checkIfIsOpen,isOpen
    }}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppProvider }