import { render, screen} from '@testing-library/react';
import App from './App';



describe("App functionality",() => { 
  it('renders App with welcome message', () => {
    render(<App />);
    const appDiv = screen.getByTestId("app");
    const welcomeMessage = screen.getByTestId("app-welcome-message")
    expect(appDiv).toBeInTheDocument();
    expect(welcomeMessage).toBeInTheDocument();
  });
})


