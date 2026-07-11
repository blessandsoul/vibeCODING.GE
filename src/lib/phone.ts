// Normalize a phone number to a digits-only key for dedup.
// "+995 555 12-34-56" → "995555123456". Keeps leading country digits.
export function normalizePhone(input: string | undefined | null): string {
  return (input ?? "").replace(/\D/g, "");
}
