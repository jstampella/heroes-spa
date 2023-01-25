import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MarvelPage } from "../../../src/heroes/pages";
import { HeroPage } from "../../../src/heroes/pages/HeroPage";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Prueba en <HeroPage/>", () => {
  beforeEach(() => jest.clearAllMocks());
  test("debe de retornar a marvel si el id no existe", () => {
    render(
      <MemoryRouter initialEntries={["/hero/batsss"]}>
        <Routes>
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="marvel" element={<MarvelPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Marvel Comics")).toBeTruthy();
  });

  test("debe de mostrar el id correspondiente", () => {
    render(
      <MemoryRouter initialEntries={["/hero/marvel-iron"]}>
        <Routes>
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="marvel" element={<MarvelPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Iron Man")).toBeTruthy();
  });
});
