import { expect } from 'chai';
import sinon from 'sinon';
import ativosModel from '../src/models/ativos.model';

// eslint-disable-next-line max-lines-per-function
describe('Buscando ativos pelo id', () => {
  describe('em caso de sucesso na busca pelo DB', () => {
    const ativos = [{
      codAtivo: 1,
      tipo: 'CDB',
      valor: 12.00,
      qtAtivo: 400,
    }];
    before(() => {
      sinon.stub(ativosModel, 'getAssetsById').resolves(ativos);
    });

    after(() => {
      (ativosModel.getAssetsById as sinon.SinonStub).restore();
    });

    it('retorna um array que não está vazio', async () => {
      const result = await ativosModel.getAssetsById(ativos[0].codAtivo);
      expect(result).to.be.an('array');
      expect(result.length).to.be.equal(1);
    });

    it('espera que o array tenha um objeto dentro da sua estrutura', async () => {
      const result = await ativosModel.getAssetsById(ativos[0].codAtivo);
      expect(result[0]).to.be.an('object');
    });
    it(
      'espera que o item retornado tenha as propriedades "codAtivo", "tipo", "valor", "qtAtivo"',
      async () => {
        const result = await ativosModel.getAssetsById(ativos[0].codAtivo);
        expect(result[0]).to.include.all.keys('codAtivo', 'tipo', 'valor', 'qtAtivo');
      },
    );
  });
});
//   (UserRepository.prototype.getAll as sinon.SinonStub).restore();
