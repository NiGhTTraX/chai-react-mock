// eslint-disable-next-line no-redeclare
export default ({ Assertion }: { Assertion: any }) => {
  Assertion.addProperty('rendered', function rendered() {
    // @ts-ignore
    const Component = this._obj;

    // @ts-ignore
    this.assert(Component.rendered === true, 'Expected component to have been rendered');
  });
};
