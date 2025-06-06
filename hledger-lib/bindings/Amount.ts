// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Price } from "./Price";

/**
 * Amount representation in balance reports
 */
export type Amount = { 
/**
 * Commodity/currency symbol
 */
commodity: string, 
/**
 * Quantity as decimal string
 */
quantity: string, 
/**
 * Optional price for priced commodities
 */
price: Price | null, };
