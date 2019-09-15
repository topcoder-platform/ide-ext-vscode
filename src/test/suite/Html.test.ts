import { expect } from 'chai';
import HtmlHelper from '../../helpers/Html';
import {
    v3Token, validChallengeDetails,
    unregisteredChallengeDetails, reviewsWithArtifacts,
    reviewsWithoutArtifacts
} from './testData';

suite('Html Unit tests', () => {
    test('register button should be invisible if user has registered', () => {
        const html = HtmlHelper.generateHtmlFromChallengeDetails(validChallengeDetails, v3Token.result.content.token);
        expect(html).to.not.contain('id="registerButton"');
    });

    test('register button should be visible if user can register', () => {
        const html = HtmlHelper
            .generateHtmlFromChallengeDetails(unregisteredChallengeDetails, v3Token.result.content.token);
        expect(html).to.contain('id="registerButton"');
    });

    test('initialize workspace button should be available', () => {
        const html = HtmlHelper
            .generateHtmlFromChallengeDetails(validChallengeDetails, v3Token.result.content.token);
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
});
