import React from 'react';
import { createReactStub } from 'react-mock-component';
import { describe, it, expect, $render } from './suite';

describe('ChaiReactMock', () => {
  it('should assert whether a component was rendered', () => {
    const Mock = createReactStub();

    expect(Mock).to.not.have.been.rendered;
    expect(() => expect(Mock).to.have.been.rendered).to.throw(
      'Expected component to have been rendered'
    );

    $render(<Mock />);

    expect(Mock).to.have.been.rendered;
    expect(() => expect(Mock).to.not.have.been.rendered).to.throw(
      'Expected component to not have been rendered'
    );
  });

  it('should assert whether a component was rendered with props', () => {
    interface MockProps { foo: string; }
    const Mock = createReactStub<MockProps>();

    expect(Mock).to.not.have.been.renderedWith({ foo: 'bar' });
    expect(() => expect(Mock).to.have.been.renderedWith({ foo: 'bar' })).to.throw(
      'Expected component to have been rendered with { foo: \'bar\' }'
    );

    $render(<Mock foo="bar" />);

    expect(Mock).to.have.been.renderedWith({ foo: 'bar' });
    expect(() => expect(Mock).to.not.have.been.renderedWith({ foo: 'bar' })).to.throw(
      'Expected component to not have been rendered with { foo: \'bar\' }'
    );
  });
});
