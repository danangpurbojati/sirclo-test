import { DETAIL_CUSTOMER, SHOW_CUSTOMERS } from "./constants"

const initialState = {
    customers: [
        {
            id: '1',
            email: 'yanuar@email.com',
            name: 'yanuar',
            telp: '123456',
            address: 'surabaya'
        },
        {
            id: '2',
            email: 'febri@email.com',
            name: 'febri',
            telp: '2468912',
            address: 'semarang'
        },
        {
            id: '3',
            email: 'mei@email.com',
            name: 'mei',
            telp: '124352',
            address: 'bandung'
        },
        {
            id: '4',
            email: 'yuni@email.com',
            name: 'yuni',
            telp: '312312',
            address: 'denpasar'
        },
        {
            id: '5',
            email: 'yulianti@email.com',
            name: 'yulianti',
            telp: '566566',
            address: 'pontianak'
        },
    ],
    selectedCustomer: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_CUSTOMERS: 
            return state.customers;
        
        case DETAIL_CUSTOMER:
            return {
                ...state,
                selectedCustomer: state.customers.filter(customer => customer.id === action.id)
            } 

        default:
            return state;
    }
}

export default reducer;