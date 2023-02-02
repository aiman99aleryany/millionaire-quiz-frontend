import { create } from 'zustand';
import INIT_MONEY from './INIT_MONEY';

const useMoney = create((set) => ({
    money: INIT_MONEY,
}));

export default useMoney;
