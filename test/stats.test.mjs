import assert from "node:assert/strict";
import test from "node:test";
import { mean, sum } from "../src/stats.mjs";

test("mean of empty is 0", () => assert.equal(mean([]), 0));
test("mean averages", () => assert.equal(mean([2, 4]), 3));
test("sum of empty is 0", () => assert.equal(sum([]), 0));
test("sum totals", () => assert.equal(sum([2, 4]), 6));
