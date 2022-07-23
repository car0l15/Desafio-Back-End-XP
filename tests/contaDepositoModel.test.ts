import { expect } from 'chai';
import sinon from 'sinon';
import contaModel from '../src/models/conta.model';

describe('Insere o valor de deposito do cliente', async () =>{
    describe('em caso de sucesso na inserção', () => {
        const saldo = [{
            codCliente:1,
            valor: 225.00,
            saldo: 225.00,
          }];

    before(async () => {
     sinon.stub(contaModel, 'deposito').resolves(saldo);
    })

    after(async () => {
        (contaModel.deposito as sinon.SinonStub).restore();
    });
   
    it('retornando um array de objeto', async () => {
     const result = await contaModel.deposito(saldo[0].codCliente, saldo[0].valor);
     expect(result[0]).to.be.an('object');
     expect(result[0]).to.be.not.empty;
    });
  
    it('o objeto dentro do array contém as chaves "codCliente", "valor"',
    async () => {
    const result = await contaModel.deposito(saldo[0].codCliente, saldo[0].valor);
    expect(result[0]).to.be.include.all.keys('codCliente', 'valor');
    });
  });
});

