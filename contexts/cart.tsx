import {
  createContext,
  useReducer,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
// import CartApi from "@/lib/api/cart";
import Cookies from 'js-cookie';
import { getAllCarts } from '@/utils/cart';
import { useRouter } from 'next/router';
import { useAuthState } from '@/contexts/auth';

interface CartState {
  items: any[];
  count: number;
  cartLoading: boolean;
}

interface Action {
  type: string;
  payload?: any;
  loading?: boolean;
}

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<
  | {
      setCart: (payload: any) => void;
      reset: () => void;
    }
  | undefined
>(undefined);

const SET_CART = 'SET_CART';
const RESET = 'RESET';

const initialState: CartState = {
  items: [],
  count: 0,
  cartLoading: true,
};

const reducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case SET_CART:
      const totalQuantity = action.payload?.reduce(
        (total: any, product: any) => {
          return total + product.quantity;
        },
        0
      );
      // console.log('totalQuantity', totalQuantity);
      return {
        ...state,
        items: action.payload || [],
        count: totalQuantity,
        cartLoading: !!action.loading,
      };
    case RESET:
      return initialState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  useEffect(() => {
    getCart();
  }, [router.asPath]);

  const getCart = async () => {
    try {
      const json = await getAllCarts();
      console.log('json', json);
      const products = json?.products || [];
      dispatch({ type: SET_CART, payload: products, loading: false });
    } catch (err) {
      // noop
    }
  };

  const setCart = (payload: any) => {
    // console.log('payload', payload);
    const products = payload?.products || [];
    dispatch({ type: SET_CART, payload: products, loading: false });
  };

  const reset = () => dispatch({ type: RESET });

  return (
    <CartDispatchContext.Provider value={{ setCart, reset }}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = (): CartState => {
  const context = useContext(CartStateContext);
  if (!context) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (!context) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
};
