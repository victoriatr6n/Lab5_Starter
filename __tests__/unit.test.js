// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('test a valid phone number with parentheses for area code', () => {
  expect(isPhoneNumber('(619) 743-1234')).toBe(true);
});

test('test a valid phone number without parentheses for area code', () => {
  expect(isPhoneNumber('619-743-1234')).toBe(true);
});

test('test a valid phone number with a missing numbers and separators', () => {
  expect(isPhoneNumber('7431234')).toBe(false);
});

test('test a valid phone number with incorrect separators', () => {
  expect(isPhoneNumber('619/345/6789')).toBe(false);
});

test('test a valid ucsd email', () => {
  expect(isEmail('vit019@ucsd.edu')).toBe(true);
});

test('test a valid gmail', () => {
  expect(isEmail('bob@gmail.com')).toBe(true);
});

test('test a gmail with missing @', () => {
  expect(isEmail('higmail.com')).toBe(false);
});

test('test a gmail with missing .com', () => {
  expect(isEmail('hi@gmail')).toBe(false);
});

test('test a strong password with only letters', () => {
  expect(isStrongPassword('heLLotHEre')).toBe(true);
});

test('test a strong password with only letters and numbers', () => {
  expect(isStrongPassword('heLLotHEre123')).toBe(true);
});

test('test a non-strong password that starts with number', () => {
  expect(isStrongPassword('1hello')).toBe(false);
});

test('test a non-strong password that has 2 characters', () => {
  expect(isStrongPassword('lo')).toBe(false);
});

test('test a valid date with 2 digit month and day MM/DD/YYYY', () => {
  expect(isDate('11/25/2018')).toBe(true);
});

test('test a valid date with 1 digit month and day MM/DD/YYYY', () => {
  expect(isDate('1/2/2003')).toBe(true);
});

test('test a invalid date with no year', () => {
  expect(isDate('1/2')).toBe(false);
});

test('test a invalid date with 3 digit day', () => {
  expect(isDate('1/234/2018')).toBe(false);
});

test('test 6 digit hex for white', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('test 3 digit hex for black', () => {
  expect(isHexColor('#000')).toBe(true);
});

test('test 8 digit invalid hex for black', () => {
  expect(isHexColor('#00000000')).toBe(false);
});

test('test 1 digit invalid hex for white', () => {
  expect(isHexColor('#F')).toBe(false);
});
