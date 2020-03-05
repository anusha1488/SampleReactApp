import data from '../src/data/db.json';

export const actionCreators = {
    getShipments: () => (dispatch) => {
         const shipmentData = data.shipments;
         dispatch({ type: "RECEIVESHIPMENTS", shipments: shipmentData });
    },
    updateSelectedShipment: (selectedShipmentId, shipmentName, shipmentMode) => (dispatch) => {
        dispatch({ type: "UpdateSelectedShipment", selectedShipmentId: selectedShipmentId, shipmentName: shipmentName, shipmentMode: shipmentMode  });
    },
};

