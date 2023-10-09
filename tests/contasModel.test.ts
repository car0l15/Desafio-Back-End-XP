import { expect } from 'chai';
import exp from 'constants';
import sinon from 'sinon';
import contaModel from '../src/models/conta.model';

describe('Buscando pela conta do cliente pelo id passado', async () => {
   describe('Em caso de sucesso na busca', () => {
      const conta = [{
        codCliente: 1,
        saldo: 250.00
      }]

      before(async () => {
        sinon.stub(contaModel, 'getContaById').resolves(conta);
      });

      after(async () => {
         (contaModel.getContaById as sinon.SinonStub).restore();
      });

      it('retorna um array', async () => {
        const result = await contaModel.getContaById(conta[0].codCliente);
        expect(result).to.be.an('array');
        expect(result).to.be.not.empty;
      });

      it('recebe um objeto dentro do array', async () => {
         const result = await contaModel.getContaById(conta[0].codCliente);
         expect(result[0]).to.be.an('object');
      });

      it('o objeto deve ter as chaves "codCliente" e "saldo"', async () => {
        const result = await contaModel.getContaById(conta[0].codCliente);
        expect(result[0]).to.include.all.keys('codCliente', 'saldo');
      });
   });
});