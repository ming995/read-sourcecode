import ChainCall from '../ChainCall'
test('is ChainCall', () => {
    const num = new ChainCall(1)
    console.log('is ChainCall ===>', num.add(1).add(2).get());
    expect(
        num.add(1).get()
    );
});
