import { authReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";

describe("prueba en AuthReducer", () => {
  const initialState = {
    logged: false,
    user: {},
  };
  test("debe de retornar el estado por defecto", () => {
    const newState = authReducer(initialState, "");
    expect(newState).toBe(initialState);
  });

  test("debe de (login) llamar el login autenticar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: {
        id: 2,
        name: "jonathan",
      },
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual({ logged: true, user: action.payload });
  });

  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    const action = {
      type: types.logout,
    };
    const state = {
      logged: true,
      user: { name: "jonathan" },
    };
    const newState = authReducer(state, action);
    expect(newState).toStrictEqual({ logged: false });
  });
});
