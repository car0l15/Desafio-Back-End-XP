import { expect } from 'chai';
import sinon from 'sinon';
import contaModel from '../src/models/conta.model';

describe('testa a função que verifica o saldo', async () => {
  describe('Em caso de sucesso', () => {
    const saldo = [{
        codCliente: 2,
        valor: 320,
        saldo: 320
       }]
    
       before(async () => {
       sinon.stub(contaModel, 'saldoSaque').resolves(saldo);
     });
    
      after(async () => {
      (contaModel.saldoSaque as sinon.SinonStub).restore();
      });

      it('retorna com o saldo anterior da conta selecionada', async () => {
       const result = await contaModel.saldoSaque(saldo[0].codCliente);
       expect(result[0]).to.be.an('object');
      });

      it('o objeto tem o saldo requerido e o codCliente', async () => {
        const result = await contaModel.saldoSaque(saldo[0].codCliente);
        expect(result[0]).to.be.include.all.keys('codCliente', 'saldo');
      })
  });
});


// describe('testa a função que traz o saque do cliente', async () => {
//   describe('Em caso de sucesso')
// });