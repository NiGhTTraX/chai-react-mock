import React from 'react';
import createReactMock from 'react-mock-component';
import { $render } from '@tdd-buffet/react';
import { describe, it } from 'tdd-buffet/suite/node';
import chai, { expect } from 'chai';
import chaiReactMock from '../src/index';

chai.use(chaiReactMock);

describe('ChaiReactMock', () => {
  it('should assert whether a component was rendered', () => {
    const Mock = createReactMock();

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
    const Mock = createReactMock<MockProps>();

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

  it('should chain assertions', () => {
    interface MockProps { foo: string; }
    const Mock = createReactMock<MockProps>();

    $render(<Mock foo="bar" />);

    expect(Mock).to.have.been.rendered
      .and.to.have.been.renderedWith({ foo: 'bar' })
      .and.to.not.have.been.renderedWith({ foo: 'baz' });
  });
});
