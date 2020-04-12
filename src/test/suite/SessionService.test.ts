import { expect } from 'chai';
import * as nock from 'nock';
import * as url from 'url';
import { getEnv} from '../../config';
import { oauthToken, pairingSession, activatedSession } from './testData';
import SessionService from '../../services/SessionService';
import * as assert from 'assert';

suite('Session Service tests', () => {
   suiteSetup(() => {
      const env = getEnv();
      const sessionUrl = env.URLS.SECURE_SESSION_HOST;
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
         .reply(200, {status: 'Timed-Out'});
   });
   suiteTeardown(() => {
      nock.cleanAll();
   });
   test('generateSecureSessionId() should create new session', async () => {
     const createdSession = await SessionService.generateSecureSessionId(oauthToken.access_token);
     expect(createdSession).to.be.equal(pairingSession.id);
   });
   test('checkForStatusUpdate() should return Available status', async () => {
      const isActive = await SessionService.checkForStatusUpdate(oauthToken.access_token, pairingSession.id);
      expect(isActive).to.be.true; // tslint:disable-line:no-unused-expression
   });
   test('checkForStatusUpdate() should return 404 if session does not exists', async () => {
      assert.rejects(async () => await SessionService.checkForStatusUpdate(oauthToken.access_token, '2043'));
   });
   test('timeOutPairingSession() should change status to Timed Out', async () => {
      const statusUpdate = await SessionService.timeOutPairingSession(oauthToken.access_token, pairingSession.id);
      expect(statusUpdate.status).to.be.equal('Timed-Out');
   });
});
