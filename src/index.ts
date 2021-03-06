import { ReactMock } from "react-mock-component";

declare global {
  export namespace Chai {
    export interface ReactMockAssertion<Props>
      extends ReactMockLanguageChains<Props> {
      rendered: ReactMockAssertion<Props>;
      renderedWith: (props: Partial<Props>) => ReactMockAssertion<Props>;
    }

    export interface ReactMockLanguageChains<Props> {
      to: ReactMockAssertion<Props>;
      have: ReactMockAssertion<Props>;
      been: ReactMockAssertion<Props>;
      not: ReactMockAssertion<Props>;
      and: ReactMockAssertion<Props>;
    }

    interface ExpectStatic {
      <Props>(target: ReactMock<Props>, message?: string): ReactMockAssertion<
        Props
      >;
    }
  }
}

// eslint-disable-next-line no-redeclare
const chaiReactMock: Chai.ChaiPlugin = ({ Assertion }) => {
  Assertion.addProperty("rendered", function rendered() {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    const Component = this._obj;

    // @ts-ignore
    this.assert(
      Component.rendered,
      "Expected component to have been rendered",
      "Expected component to not have been rendered"
    );
  });

  Assertion.addMethod("renderedWith", function renderedWith<Props>(
    props: Props
  ) {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    const Component: ReactMock<Props> = this._obj;

    const msg = Component.rendered
      ? "but it was rendered with #{act}"
      : "but it was never rendered";

    // @ts-ignore
    this.assert(
      Component.renderedWith(props),
      `Expected component to have been rendered with #{exp}
${msg}`,
      `Expected component to not have been rendered with #{exp}
${msg}`,
      props,
      Component.renderCalls
    );
  });
};

export default chaiReactMock;
