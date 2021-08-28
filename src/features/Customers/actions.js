import { DETAIL_CUSTOMER, SHOW_CUSTOMERS } from "./constants";

export const showCustomers = () => {
    return {
        type: SHOW_CUSTOMERS
    }
}

export const showDetailCustomer = (id) => {
    return {
        type: DETAIL_CUSTOMER,
        id
    }
}