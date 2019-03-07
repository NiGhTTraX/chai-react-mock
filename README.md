> Chai plugin for [react-mock-component](https://github.com/NiGhTTraX/react-mock-component)

----

## Usage

```typescript jsx
import chai from 'chai';
import chaiReactMock from 'chai-react-mock';
import createReactStub from 'react-mock-component';
import React from 'react';
import ReactDOM from 'react-dom';

chai.use(chaiReactMock);
const { expect } = chai;

interface StubProps { foo: string; }
const Stub = createReactStub<StubProps>();

ReactDOM.render(<Stub foo="bar" />);

expect(Stub).to.have.been.rendered
  .and.to.have.been.renderedWith({ foo: 'bar' });
```
