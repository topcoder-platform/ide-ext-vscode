import { expect } from 'chai';
import HtmlHelper from '../../helpers/Html';
import {
    oauthToken, validChallengeDetails,
    unregisteredChallengeDetails, reviewsWithArtifacts,
    reviewsWithoutArtifacts
} from './testData';

suite('Html Unit tests', () => {
    test('register button should be invisible if user has registered', () => {
        const html = HtmlHelper.generateHtmlFromChallengeDetails(validChallengeDetails, oauthToken.access_token);
        expect(html).to.not.contain('id="registerButton"');
    });

    test('register button should be visible if user can register', () => {
        const html = HtmlHelper
            .generateHtmlFromChallengeDetails(unregisteredChallengeDetails, oauthToken.access_token);
        expect(html).to.contain('id="registerButton"');
    });

    test('initialize workspace button should be available', () => {
        const html = HtmlHelper
            .generateHtmlFromChallengeDetails(validChallengeDetails, oauthToken.access_token);
        expect(html).to.contain('onclick=\'initializeWorkspace');
    });

    test('artifacts should be visible in submission details html', async () => {
        const html = HtmlHelper.generateReviewArtifactsHtml(reviewsWithArtifacts);
        expect(html).to.contain('<h2>Artifacts</h2>');
    });

    test('artifacts should not be visible in submission details html', async () => {
        const html = HtmlHelper.generateReviewArtifactsHtml(reviewsWithoutArtifacts);
        expect(html).to.not.contain('<h2>Artifacts</h2>');
    });
    test('pairing page should contain qr code', async () => {
      const html = await HtmlHelper.generateSecureSessionFlowHtml('test-3243');
      expect(html).to.contain('<img src="data:image/');
    });
});
