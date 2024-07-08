const INITIAL_STATE = { type: "DEFAULT", payload: "(^.^)"};

function emojiReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "HAPPY":
            return { ...state, payload: "ɷ◡ɷ", color: "orange"};

        case "SAD":
            return { ...state, payload: "●︿●", color: "gray"};

        case "ANGRY":
            return { ...state, payload: "〴⋋_⋌〵", color: "red"};

        case "CONFUSED":
            return { ...state, payload: "●.◉", color: "olive"};

        default:
            return state;
    }
}

const store = Redux.createStore(emojiReducer);