
const initialState = {
    shipments: [],
};

export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case "RECEIVESHIPMENTS":
            return { ...state, shipments: action.shipments };
        case "UpdateSelectedShipment":
            Object.keys(state.shipments).forEach((index) => {
                if (action.selectedShipmentId === state.shipments[index].id) {
                    state.shipments[index].name = action.shipmentName;
                    state.shipments[index].mode = action.shipmentMode;
                }
            });
            return { ...state, shipments: state.shipments };
    };


    return state;
};
