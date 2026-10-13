/** Published aiCALL rates, in tetri. Estimates are not a binding quote. */
export const CALL_RATES = { inbound: 0, extraChannel: 6000, outbound: 150, setup: 15000 } as const;

export function estimateCallCost(monthlyGEL: number, extraInboundChannels: number, outboundMinutes: number, firstMonth: boolean) {
  const minutes = (value: number) => Number.isFinite(value) ? Math.max(0, value) : 0;
  const subscription = Math.round(Math.max(0, monthlyGEL) * 100);
  const extraChannels = Math.round(minutes(extraInboundChannels) * CALL_RATES.extraChannel);
  const outbound = Math.round(minutes(outboundMinutes) * CALL_RATES.outbound);
  const setup = firstMonth ? CALL_RATES.setup : 0;
  return { subscription, inbound: CALL_RATES.inbound, extraChannels, outbound, setup, total: subscription + extraChannels + outbound + setup };
}
