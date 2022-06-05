import { render, screen } from "@testing-library/react";
import UploadForm from "./UploadForm";

describe("Given a UploadForm component", () => {
  describe("When the component it's rendered", () => {
    test("Then the component should display a button submit", () => {
      render(<UploadForm />);

      const foundedButton = screen.getByRole("button", { name: /submit/i });

      expect(foundedButton).toBeInTheDocument();
    });
  });
});
