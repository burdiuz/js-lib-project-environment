import SomeString from './index';

describe('index', () => {
    it('should export string as default', () => {
        expect(typeof SomeString).to.be.equal('string');
        expect(SomeString).to.not.be.empty;
    });
});
