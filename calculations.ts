export function radioactiveDecay(N0:number, halfLife:number, t:number) {
  if (halfLife <= 0) throw new Error("Half-life must be positive");
  return N0 * Math.exp(-(Math.log(2) / halfLife) * t);
}
export function shielding(I0:number, mu:number, x:number) {
  return I0 * Math.exp(-mu * x);
}
export const energy = {
  evToJ: (v:number) => v * 1.602176634e-19,
  mevToJ: (v:number) => v * 1.602176634e-13,
  kwhToJ: (v:number) => v * 3.6e6,
  mwdToJ: (v:number) => v * 8.64e10,
};