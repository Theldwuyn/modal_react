/*eslint-disable */

/*eslint disable for the following line, triggering an linter warning, as it
consider toBeInTheDocument is not used in the current file
Import line needed to not break test suite */
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import Modal from '../modal';
import { useRef } from 'react';

/*eslint-enable */

/*We define a test component to allow us to use useRef hook to provide an open
button to our modal component */
function TestComponent() {
  const buttonRef = useRef(null);

  return (
    <>
      <button ref={buttonRef}>Open modal</button>
      <Modal title="Title test" content="test content" buttonRef={buttonRef} />
    </>
  );
}

describe('modal component test suite', () => {
  beforeEach(() => {
    render(<TestComponent />);
  });
  it('should render provided title and content', () => {
    const title = screen.getByText('Title test');
    const content = screen.getByText('test content');
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
  it('should render but not be visible', () => {
    const modal = screen.getByText('Title test').closest('.modalContainer');
    expect(modal).not.toBeVisible();
  });
  it('should be visible when user click on button', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const modal = screen.getByText('Title test').closest('.modalContainer');
    expect(modal).toBeVisible();
  });
  it('should close when user click on cross', () => {
    const button = screen.getByRole('button');
    const modal = screen.getByText('Title test').closest('.modalContainer');

    fireEvent.click(button);
    expect(modal).toBeVisible();

    const closeImg = screen.getByRole('img');
    fireEvent.click(closeImg);
    expect(modal).not.toBeVisible();
  });
  it('should close when user click on modal container (grey background)', () => {
    const button = screen.getByRole('button');
    const modal = screen.getByText('Title test').closest('.modalContainer');

    fireEvent.click(button);
    expect(modal).toBeVisible();

    fireEvent.click(modal);
    expect(modal).not.toBeVisible();
  });
});
