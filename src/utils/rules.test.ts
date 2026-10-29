import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateOffer,
  convertAmount,
  calculateSedoBreakdown,
  getSedoListingUrl,
  CURRENCIES,
} from './domainOffer';
import {
  createInitialPuzzle,
  canPour,
  pourLiquid,
  checkWinCondition,
  Tube,
} from './waterSortGame';

test('validateOffer rejects invalid numbers or below minimum', () => {
  const zeroResult = validateOffer(0, 'USD', 'buyer@studio.com');
  assert.equal(zeroResult.isValid, false);

  const belowMin = validateOffer(100, 'USD', 'buyer@studio.com');
  assert.equal(belowMin.isValid, false);
  assert.match(belowMin.error || '', /Minimum starting offer is \$350 USD/);

  const invalidEmail = validateOffer(800, 'USD', 'notanemail');
  assert.equal(invalidEmail.isValid, false);
  assert.match(invalidEmail.error || '', /valid contact email/);

  const validOffer = validateOffer(800, 'USD', 'acquisitions@voodoo.io');
  assert.equal(validOffer.isValid, true);
  assert.equal(CURRENCIES.USD.buyNowPrice, 800);
});

test('convertAmount correctly converts between USD and INR', () => {
  const usdAmount = 1000;
  const inrConverted = convertAmount(usdAmount, 'USD', 'INR');
  assert.ok(inrConverted > 80000, 'Expected INR conversion > 80,000');

  const backToUSD = convertAmount(inrConverted, 'INR', 'USD');
  assert.ok(Math.abs(backToUSD - usdAmount) < 20, 'Conversion round-trip within tolerance');
});

test('calculateSedoBreakdown gives zero buyer fee and full escrow transparency', () => {
  const breakdown = calculateSedoBreakdown(5000, 'USD');
  assert.equal(breakdown.buyerFee, 0);
  assert.equal(breakdown.totalPayable, 5000);
  assert.equal(breakdown.escrowProtectionIncluded, true);
  assert.equal(breakdown.freeOwnershipTransferIncluded, true);
});

test('getSedoListingUrl produces verified Sedo details link', () => {
  const url = getSedoListingUrl('watersort.in');
  assert.equal(url, 'https://sedo.com/search/details/?domain=watersort.in');
});

test('waterSortGame canPour respects color match and capacity', () => {
  const tubes: Tube[] = [
    { id: 1, layers: ['sapphire', 'emerald'] },
    { id: 2, layers: ['amber', 'emerald'] },
    { id: 3, layers: ['amber', 'amber', 'amber', 'amber'] }, // full
    { id: 4, layers: [] }, // empty
  ];

  // From 1 (top emerald) to 2 (top emerald) -> true
  assert.equal(canPour(tubes, 0, 1), true);

  // From 1 (top emerald) to 3 (full) -> false
  assert.equal(canPour(tubes, 0, 2), false);

  // From 1 to 4 (empty) -> true
  assert.equal(canPour(tubes, 0, 3), true);

  // From 4 (empty) to 1 -> false
  assert.equal(canPour(tubes, 3, 0), false);
});

test('pourLiquid moves contiguous matching colors and updates counts', () => {
  const tubes: Tube[] = [
    { id: 1, layers: ['sapphire', 'emerald', 'emerald'] },
    { id: 2, layers: ['amber', 'emerald'] },
  ];

  const result = pourLiquid(tubes, 0, 1);
  assert.equal(result.pouredCount, 2); // target capacity 4, had 2, so has space for 2, source had 2 matching emeralds
  // Target had 2 layers + 2 emeralds = 4 layers (full!)
  assert.equal(result.newTubes[1].layers.length, 4);
  assert.equal(result.newTubes[0].layers.length, 1);
  assert.equal(result.newTubes[0].layers[0], 'sapphire');
});

test('checkWinCondition verifies completely sorted tubes', () => {
  const solvedTubes: Tube[] = [
    { id: 1, layers: ['sapphire', 'sapphire', 'sapphire', 'sapphire'] },
    { id: 2, layers: ['emerald', 'emerald', 'emerald', 'emerald'] },
    { id: 3, layers: [] },
  ];
  assert.equal(checkWinCondition(solvedTubes), true);

  const unsolvedTubes: Tube[] = [
    { id: 1, layers: ['sapphire', 'sapphire', 'emerald', 'sapphire'] },
    { id: 2, layers: ['emerald', 'emerald', 'sapphire', 'emerald'] },
  ];
  assert.equal(checkWinCondition(unsolvedTubes), false);
});
