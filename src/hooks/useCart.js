import { useLocalStorage }from "./useLocalStorage";

export const useCart = (key, initialValue) =>{
    const [cart, setCart] = useLocalStorage(key, initialValue)

    return [cart, setCart];
}