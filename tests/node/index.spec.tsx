import React from 'react';
import { describe, it, expect, $render } from './suite';
import { createReactStub } from 'react-mock-component';

describe('ChaiReactMock', () => {
  it('should assert whether a component was rendered', () => {
    const Mock = createReactStub();

    expect(Mock).to.not.have.been.rendered;
    expect(() => expect(Mock).to.have.been.rendered).to.throw();

    $render(<Mock />);

    expect(Mock).to.have.been.rendered;
    expect(() => expect(Mock).to.not.have.been.rendered).to.throw();
  });
});
