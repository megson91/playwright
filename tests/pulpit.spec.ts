import { test, expect } from '@playwright/test';

test.describe('Pulpit tests', () => {
    test.only('test', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        await page.getByTestId('login-input').fill('Tester66');
        await page.getByTestId('password-input').fill('qwerty1234');
        await page.getByTestId('login-button').click();
        await page.getByTestId('user-name').click();

        await page.locator('#widget_1_transfer_receiver').selectOption('2');
        await page.locator('#widget_1_transfer_amount').fill('150');
        await page.locator('#widget_1_transfer_title').fill('Zwrot środków');
        await page.getByRole('button', { name: 'wykonaj' }).click();
        await page.getByTestId('close-button').click();
    });

});