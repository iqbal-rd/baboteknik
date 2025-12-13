export function cn(...inputs: (string | false | null | undefined)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatDate(date: string) {
  const dateUTC = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Jakarta", 
    day: "2-digit", 
    month: "long", 
    year: "numeric", 
  };

  return dateUTC.toLocaleDateString("id-ID", options);
}