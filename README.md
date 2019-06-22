> Chai plugin for [react-mock-component](https://github.com/NiGhTTraX/react-mock-component)

[![Build Status](https://travis-ci.com/NiGhTTraX/chai-react-mock.svg?branch=master)](https://travis-ci.com/NiGhTTraX/chai-react-mock) [![codecov](https://codecov.io/gh/NiGhTTraX/chai-react-mock/branch/master/graph/badge.svg)](https://codecov.io/gh/NiGhTTraX/chai-react-mock) ![npm type definitions](https://img.shields.io/npm/types/chai-react-mock.svg)

----

## Usage

```typescript jsx
import chai from 'chai';
import chaiReactMock from 'chai-react-mock';
import createReactMock from 'react-mock-component';
import React from 'react';
import ReactDOM from 'react-dom';

chai.use(chaiReactMock);
const { expect } = chai;

interface StubProps { foo: string; }
const Stub = createReactMock<StubProps>();

ReactDOM.render(<Stub foo="bar" />);

expect(Stub).to.have.been.rendered
  .and.to.have.been.renderedWith({ foo: 'bar' });
```
