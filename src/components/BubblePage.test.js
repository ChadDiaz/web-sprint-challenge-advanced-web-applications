import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Color from './Color'
import { fetchColors as mockFetchColors } from '../helpers/fetchColors';
import {res} from '../helpers/res'

jest.mock('../helpers/fetchColors')

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage/>)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(res)
  render(<BubblePage />)
  await waitFor(() => expect(screen.getAllByTestId(/color/i)).toHaveLength(3));
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading