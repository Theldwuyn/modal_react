# modal_react

## Installation

```bash
$ npm install @guillaume.a/modal_react
$ yarn add @guillaume.a/modal_react
```
Node version: 23.3.0
Npm version: 10.9.0
Yarn version: 1.22.22

## Usage
The Modal component can take up to 3 props:
- title: provide the desired title of the modal
- content: provide the desired content of the modal
- buttonRef: provide the ref of the button used to open the modal, this one is required

To close the modal, you can either click on the given close button or click outside of the modal.

## Example
Here is a simple example of modal_react being used

```javascript
import { useRef } from 'react';
import Modal from '@guillaume.a/modal_react';

function Example() {
  const buttonRef = useRef(null);
  return (
    <>
      <button ref={buttonRef}>Open</button>
      <Modal title="test" content="test" buttonRef={buttonRef} />
    </>
  );
}
```

## Recommended text editor

I personnaly recommend using VSCode editor