const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { AuthContext } = require("../../src/auth/context/AuthContext");
const { AppRouter } = require("../../src/router/AppRouter");

describe("Pruebas en <AppRouter/>", () => {
  test("debe de mostrar el login si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("debe de mostrar el componente marvel si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ADB",
        name: "juan",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Marvel Comics")).toBeTruthy();
  });
});
