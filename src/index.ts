import { ReactMock } from 'react-mock-component';

declare global {
  export namespace Chai {
    export interface ReactMockAssertion<Props> extends ReactMockLanguageChains<Props> {
      rendered: boolean;
    }

    export interface ReactMockLanguageChains<Props> {
      to: ReactMockAssertion<Props>;
      have: ReactMockAssertion<Props>;
      been: ReactMockAssertion<Props>;
      not: ReactMockAssertion<Props>;
    }

    interface AssertionStatic {
      <Props>(target: ReactMock<Props>, message?: string): ReactMockAssertion<Props>;
    }
  }
}

interface ChaiAssertion {
  addProperty: (name: string, fn: () => void) => void;
}

// eslint-disable-next-line no-redeclare
export default ({ Assertion }: { Assertion: ChaiAssertion }) => {
  Assertion.addProperty('rendered', function rendered() {
    // @ts-ignore
    const Component = this._obj;

    // @ts-ignore
    this.assert(
      Component.rendered,
      'Expected component to have been rendered',
      'Expected component to not have been rendered'
    );
  });
};
