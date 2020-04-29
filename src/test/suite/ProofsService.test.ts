import { expect } from 'chai';
import * as nock from 'nock';
import * as url from 'url';
import { getEnv} from '../../config';
import { oauthToken, pairingSession, activatedSession } from './testData';
import ProofsService from '../../services/ProofsService';
import * as assert from 'assert';

suite('Proofs Service tests', () => {
   suiteSetup(() => {
      const env = getEnv();
      const sessionUrl = env.URLS.PROOFS_API_ENDPOINT;
      const sessionId = pairingSession.id;
      nock(/\.com/)
         .persist()
         .post('/sessions')
         .reply(200, pairingSession)
         .get(`/sessions/${sessionId}`)
         .reply(200, activatedSession)
         .get('/sessions/2043')
         .reply(404)
         .patch(`/sessions/${sessionId}`)
         .reply(200, {status: 'Timed-Out'})
         .patch(`/sessions/${sessionId}`)
         .reply(200, {status: 'Closed'});
      nock(/\.com/, { allowUnmocked: true })
        .persist()
        .post(`/bioid/enroll`)
        .reply(200, {Success: true})
        .post(`/bioid/verify`)
        .reply(200, {Success: true});

   });
   suiteTeardown(() => {
      nock.cleanAll();
   });
   test('generateSecureSessionId() should create new session', async () => {
     const createdSession = await ProofsService.generateSecureSessionId(oauthToken.access_token);
     expect(createdSession).to.be.equal(pairingSession.id);
   });
   test('checkForStatusUpdate() should return Available status', async () => {
      const isActive = await ProofsService.checkForStatusUpdate(oauthToken.access_token, pairingSession.id);
      expect(isActive).to.be.true; // tslint:disable-line:no-unused-expression
   });
   test('checkForStatusUpdate() should return 404 if session does not exists', async () => {
      assert.rejects(async () => await ProofsService.checkForStatusUpdate(oauthToken.access_token, '2043'));
   });
   test('timeOutPairingSession() should change status to Timed Out', async () => {
    const statusUpdate = await ProofsService.timeOutPairingSession(oauthToken.access_token, pairingSession.id);
    expect(statusUpdate.status).to.be.equal('Timed-Out');
   });
   test('closeSession() should change status to Closed', async () => {
    const statusUpdate = await ProofsService.closeSession(oauthToken.access_token, pairingSession.id);
    expect(statusUpdate.status).to.be.equal('Closed');
   });
  //  TODO - update test once we stabilize the code
  //  test('verifyBioid() should return true if image is sent', async () => {
  //   const testingPath = './test.jpg';
  //   const verified = await SessionService.verifyBioid('', oauthToken.access_token, testingPath, {});
  //   // tslint:disable-next-line: no-unused-expression
  //   expect(verified).to.be.true;
  //  });
  //  test('enrollBioid() should return true if image is sent', async () => {
  //   const testingPath = './test.jpg';
  //   const enrolled = await SessionService.enrollBioid('', oauthToken.access_token, testingPath);
  //   // tslint:disable-next-line: no-unused-expression
  //   expect(enrolled).to.be.true;
  //  });
});
