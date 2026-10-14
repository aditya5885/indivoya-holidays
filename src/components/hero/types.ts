export type Tab = "dest" | "when" | "guests";

export type Trip = {
  dest: string;
  month: string;
  adults: number;
  children: number;
  infants: number;
};

export const EMPTY_TRIP: Trip = { dest: "", month: "", adults: 0, children: 0, infants: 0 };

export function guestLabel(t: Trip): string {
  const total = t.adults + t.children;
  if (!total && !t.infants) return "Add travellers";
  let s = `${total} traveller${total === 1 ? "" : "s"}`;
  if (t.infants) s += `, ${t.infants} infant${t.infants > 1 ? "s" : ""}`;
  return s;
}
