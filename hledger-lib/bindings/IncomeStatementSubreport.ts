// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PeriodDate } from "./PeriodDate";
import type { PeriodicBalanceRow } from "./PeriodicBalanceRow";

/**
 * A subreport in the income statement (Revenues, Expenses)
 */
export type IncomeStatementSubreport = { 
/**
 * The name of the subreport (e.g., "Revenues", "Expenses")
 */
name: string, 
/**
 * The period dates for this subreport
 */
dates: Array<PeriodDate>, 
/**
 * Account rows in this subreport
 */
rows: Array<PeriodicBalanceRow>, 
/**
 * Totals for this subreport
 */
totals: PeriodicBalanceRow | null, 
/**
 * Whether this subreport increases the overall total (true) or decreases it (false)
 * - Revenues: true (increases net income)
 * - Expenses: false (decreases net income)
 */
increases_total: boolean, };
